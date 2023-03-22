import React, { useEffect, useState } from "react";

// Define Course type
type Course = {
  metadata: {
    name: string;
    description: {
      description: string;
      instructors: string[];
    };
    location: string[];
    instructors: string[][];
  };
};

// Create functional React component
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  if (course.metadata.description.instructors) {
    console.log("no course:", course.metadata.location);
  }

  useEffect(() => {}, []);

  // Add useState for managing dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Add a function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function stripHTMLTags(str: string | undefined) {
    if (str === undefined) {
      return "TBA";
    }
    return str.replace(/<[^>]*>/g, "");
  }

  console.log(course);

  function parseCourseData(str: string) {
    const daysOfWeekRegex = /^(M|Tu|W|Th|F|Sa|Su)+/;
    const timeRegex = /\d{2}:\d{2}(AM|PM| Noon)-\d{2}:\d{2}(AM|PM)/;
    const locationRegex =
      /(?:\d{2}:\d{2}(AM|PM| Noon)-\d{2}:\d{2}(AM|PM))\s(.+)/;

    const daysOfWeekMatch = str.match(daysOfWeekRegex);
    const timeMatch = str.match(timeRegex);
    const locationMatch = str.match(locationRegex);

    const daysOfWeek = daysOfWeekMatch ? daysOfWeekMatch[0] : "";
    const time = timeMatch ? timeMatch[0] : "";
    const location = locationMatch ? locationMatch[3] : stripHTMLTags(str);

    return { daysOfWeek, time, location };
  }

  function getRateMyProfessor(course: Course, name: string | undefined) {
    if (!name) {
      console.log(course);
      return "";
    }

    let formattedName = name.split(",");
    console.log(formattedName);
    if (formattedName.length > 1) {
      formattedName = [formattedName[1].split(" ")[1], formattedName[0]];
    } else {
      formattedName = formattedName[0].split(" ");
    }
    const stringName = formattedName.join("%20");

    return stringName;
  }

  const chevronRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-right"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  const chevronDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  return (
    <div className="col-span-1 max-w-4xl w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">
            {course.metadata.name}
          </h2>
          <p className="mt-2 text-gray-600">
            {stripHTMLTags(course.metadata.description.description)}
          </p>
          <span
            onClick={toggleDropdown}
            className="flex items-center hover:cursor-pointer mt-4 inline-flex"
          >
            {isDropdownOpen ? chevronDown : chevronRight}
            <span className="text-lg font-bold ml-4 text-gray-800">
              Professors
            </span>
          </span>
        </div>
        <div className={isDropdownOpen ? "max-h-full" : "max-h-0"}>
          <div
            className="mx-auto w-11/12 mb-4 opacity-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: isDropdownOpen ? 1 : 0 }}
          >
            <table className="w-full table-auto text-left text-gray-600">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="py-2 sm:whitespace-normal whitespace-nowrap w-2/6">
                    Professor
                  </th>
                  {/*                 <th className="py-2 sm:whitespace-normal whitespace-nowrap">Days</th>
                <th className="py-2 sm:whitespace-normal whitespace-nowrap">Time</th>
                <th className="py-2 sm:whitespace-normal whitespace-nowrap">Place</th> */}
                </tr>
              </thead>
              <tbody>
                {course.metadata.instructors.map((instructor, index) => {
                  if (instructor.length === 0) {
                    return;
                  }

                  const strippedLocation = stripHTMLTags(
                    course.metadata.location[index]
                  );
                  const { daysOfWeek, time, location } =
                    parseCourseData(strippedLocation);

                  const instructors = instructor.map((instructor, index) => {
                    return (
                      <a
                        key={index}
                        href={
                          instructor
                            ? `https://www.ratemyprofessors.com/search/teachers?query=${getRateMyProfessor(
                                course,
                                instructor
                              )}&sid=U2Nob29sLTEyMg==`
                            : ""
                        }
                        target="_blank"
                      >{`${index > 0 ? "| " + instructor : instructor}`}</a>
                    );
                  });

                  return (
                    <tr key={index}>
                      <td
                        className={`py-2 pr-4 whitespace-normal ${
                          instructor ? "text-red-800" : ""
                        } `}
                      >
                        <span className="space-x-1">{instructors}</span>
                      </td>
                      {/*                     <td className="py-2 pr-4 whitespace-normal">
                      {daysOfWeek}
                    </td>
                    <td className="py-2 whitespace-normal">{time}</td>
                    <td className="py-2 whitespace-normal">{location}</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
