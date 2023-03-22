import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import CourseCard from "../../components/CourseCard";
import CustomHeader from "../../components/CustomHeader";

export default function Home() {
  const [matchedCourses, setMatchedCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const onResults = (matches: any[]) => {
    if (matchedCourses.length > 0) {
      setMatchedCourses([]);
    }

    // Convert JSON description property into a JS object for each course
    matches.forEach((course) => {
      course.metadata.description = JSON.parse(course.metadata.description);
      // This function takes in an array of matches and parses the description, instructors, and location properties of each course into a JavaScript object. The parsed objects are then added to the matchedCourses array.
      course.metadata.instructors = JSON.parse(course.metadata.instructors);
      course.metadata.location = JSON.parse(course.metadata.location);
      // console.log(course)
      // console.log(course.metadata.description)
      setMatchedCourses((matchedCourses) => [...matchedCourses, course]);
    });
  };

  return (
    <>
      <CustomHeader />
      <div className="">
        <header className="bg-red-100 border-b shadow py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a
              href="https://eaen.bc.edu/student-registration/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-500 hover:bg-red-700 text-white text-lg font-bold py-2 px-4 mr-10 rounded hidden sm:block">
                Eagle Apps
              </button>
            </a>
            <div className="text-center">
              <h1 className="text-5xl font-bold pb-1">
                <span role="img" aria-label="magnifying glass">
                  🔎
                </span>
                <span className="bg-gradient-to-b from-red-500 to-red-800 text-transparent bg-clip-text mx-4">
                  Eagle Eye
                </span>
                <span role="img" aria-label="magnifying glass">
                  🔎
                </span>
              </h1>
              <p className="mt-2 text-xl text-gray-600 mt-4">
                Discover courses you love and get email updates when seats open
                up
              </p>
            </div>
            <a
              href="https://services.bc.edu/password/external/launcher/generic.do?id=Explorance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-lg py-2 px-4 rounded hidden sm:block">
                Course Evaluations
              </button>
            </a>
          </div>
        </header>

        <div className="mt-2.5">
          <SearchBar setLoading={setLoading} onResults={onResults} />
        </div>

        <div className="container mx-auto px-4 mt-8 mb-8">
          <div className="flex flex-col items-center space-y-2">
            {matchedCourses.length === 0 ? (
              <div className="max-w-6xl mx-auto py-8">
                <h2 className="text-3xl font-bold mb-4">
                  Need some ideas? Try one of these searches:
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Expert Level Storytelling
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Science Fiction and AI
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">How to Think</h3>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        The Art of Negotiation
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Real-world Finance and Accounting
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        The Psychology of Happiness
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Communication Skills 101
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Digital Media Ethics
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        Bioengineering and Society
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ) : loading ? (
              <div className="w-16 h-16 border-t-4 border-red-500 border-solid rounded-full animate-spin" />
            ) : (
              matchedCourses.map((course, index) => {
                return <CourseCard course={course} key={index} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
