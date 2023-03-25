# [Eagle Eye](https://www.eaglesearch.org/)

Eagle Eye is a website that enables a seamless semantic search across **all 2,080 Boston College courses** and provides students with email notifications when seats open up.

![Eagle Eye Open Graph Image](/public/image.png)

## Stats

One day after launch, the site has had over **200 unique viewers**, **500+ page views**, and has performed **450+ search queries**.

## Tech Stack

The website is built using the following technologies:

- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript that adds optional types to the language.
- [Python](https://www.python.org/): A high-level programming language used for general-purpose programming. Python is used to mock web requests, parse course information, and automate emails.
- [OpenAI](https://openai.com/): A research organization working towards building advanced AI systems. OpenAI's ada-002 embedding model is used to embed course titles and descriptions in the Pinecone vector database.
- [Pinecone](https://www.pinecone.io/): A cloud-based vector database for building machine learning applications. Pinecone is used to store the course title and description embeddings.
- [Langchain](https://langchain.io/): A natural language processing (NLP) platform for developers. Langchain is used to streamline the process of embedding all courses with the OpenAI ada-002 model.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [Vercel](https://vercel.com/): A cloud platform for serverless deployment and hosting.
- [Next.js](https://nextjs.org/): A framework for building server-side rendered React applications.

## How I Built This
First, I successfully replicated the HTTP OAUTH request sequence to parse course descriptions, titles, instructors, class times, locations, and seat counts from the BC registration site. Once registration opens, I will enable a cron job to automatically send emails to users when a seat opens in a class that was formerly filled using the Gmail API. The python code to complete this is redacted to prevent malicious actors from overloading BC servers.

## Coming Soon

Email notifications and chat with a class by providing course details as a system prompt to GPT-3.5 for students to interact more deeply with the content before committing to a course.
