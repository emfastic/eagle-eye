import type { NextApiRequest, NextApiResponse } from 'next'
import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings"

type QueryResponse = {
  results: any[],
  metadata: any[],
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<QueryResponse | undefined>
) {
  
  const pinecone = new PineconeClient();
  await pinecone.init({
  environment: "us-west1-gcp",
  apiKey: process.env.PINECONE_API_KEY || "",
});
  
  const index = pinecone.Index("classes-store")

  const embeddings = new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY })
  const embeddingRes = await embeddings.embedQuery(req.body['query'])

  // const embeddingRes = Array(1536).fill(0);
  
  const queryRequest = {
    vector: embeddingRes,
    topK: req.body['searchResults'],
    includeMetadata: true,
  }

try {
  const queryResponse: any = await index.query({ queryRequest })
  return res.status(200).json(queryResponse)
}
  catch (error: any) {
    console.log(error.message)
  }
}
