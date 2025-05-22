import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/mounaimMoussaoui/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.filter(repo => !repo.fork));
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">My Portfolio</h1>

      {loading ? (
        <p className="text-center text-gray-500">جاري تحميل المشاريع...</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
              <img
                src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
                alt={repo.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{repo.name}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  {repo.description || "لا يوجد وصف لهذا المشروع."}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={`https://mounaimmoussaoui.github.io/${repo.name}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    عرض المشروع
                  </a>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                    title="رابط كود المشروع"
                  >
                    <AiFillGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;

