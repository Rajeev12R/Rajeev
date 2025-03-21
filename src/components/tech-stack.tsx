"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaCode, FaTrophy, FaChartLine } from "react-icons/fa"

const CodingStats = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  // Mock data for GitHub contributions
  const githubContributions = [
    // Each array represents a week (7 days)
    [0, 2, 0, 1, 3, 0, 0],
    [4, 2, 1, 0, 2, 3, 5],
    [1, 0, 3, 4, 2, 7, 1],
    [0, 2, 1, 3, 5, 2, 0],
    [3, 5, 2, 1, 0, 3, 2],
    [1, 2, 4, 5, 7, 3, 0],
    [0, 1, 3, 2, 4, 1, 2],
    [5, 3, 1, 0, 2, 3, 1],
    [2, 4, 6, 3, 1, 0, 2],
    [1, 0, 2, 3, 5, 2, 1],
    [3, 2, 0, 1, 4, 3, 2],
    [2, 3, 5, 7, 4, 2, 1],
  ]

  // Mock data for LeetCode stats
  const leetcodeStats = {
    solved: 187,
    total: 2500,
    easy: { solved: 85, total: 650, percentage: (85 * 100) / 650 },
    medium: { solved: 78, total: 1350, percentage: (78 * 100) / 1350 },
    hard: { solved: 24, total: 500, percentage: (24 * 100) / 500 },
    ranking: 45632,
    recentProblems: [
      { name: "Two Sum", difficulty: "Easy", date: "2 days ago" },
      { name: "LRU Cache", difficulty: "Medium", date: "5 days ago" },
      { name: "Merge k Sorted Lists", difficulty: "Hard", date: "1 week ago" },
    ],
  }

  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-gray-100 dark:bg-gray-800"
    if (count < 3) return "bg-green-200 dark:bg-green-900"
    if (count < 5) return "bg-green-400 dark:bg-green-700"
    return "bg-green-600 dark:bg-green-500"
  }

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === "Easy") return "text-green-500"
    if (difficulty === "Medium") return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className="relative w-full min-h-[400px] my-8 sm:py-24 md:py-32 lg:py-40">
      {/* GitHub Contributions Card (Background) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-[90%] bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-5 z-10"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FaGithub className="text-2xl text-gray-800 dark:text-white" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">GitHub Contributions</h3>
          </div>
          <button className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1 cursor-pointer">
            <span>View Profile</span>
          </button>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800"></div>
              <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900"></div>
              <div className="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-700"></div>
              <div className="w-3 h-3 rounded-sm bg-green-600 dark:bg-green-500"></div>
            </div>
            <span>More</span>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {githubContributions.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day)} hover:ring-2 hover:ring-gray-400 transition-all`}
                    title={`${day} contributions`}
                  ></div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex flex-col items-center justify-center">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Total Commits</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">1,248</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex flex-col items-center justify-center">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Repositories</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">32</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex flex-col items-center justify-center">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Pull Requests</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">78</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex flex-col items-center justify-center">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Code Reviews</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">124</p>
          </div>
        </div>
      </motion.div>

      {/* LeetCode Stats Card (Foreground) */}
      <motion.div
        initial={{ opacity: 0, y: 40, x: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 180 : 40, x: isVisible ? 100 : 40 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute top-10 lg:right-0 md:right-0 right-[20%] w-[75%] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 p-5 z-20"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FaCode className="text-2xl text-orange-500" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">LeetCode Stats</h3>
          </div>
          <div className="flex items-center gap-2">
            <FaTrophy className="text-yellow-500" />
            <span className="text-gray-700 dark:text-gray-300">Rank: {leetcodeStats.ranking}</span>
          </div>
        </div>

        <div className="flex gap-6 mb-6">
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Problems Solved</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {leetcodeStats.solved}/{leetcodeStats.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: isVisible ? `${(leetcodeStats.solved / leetcodeStats.total) * 100}%` : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-green-500">Easy</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {leetcodeStats.easy.solved}/{leetcodeStats.easy.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${leetcodeStats.easy.percentage}%` : 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-yellow-500">Medium</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {leetcodeStats.medium.solved}/{leetcodeStats.medium.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-yellow-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${leetcodeStats.medium.percentage}%` : 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-red-500">Hard</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {leetcodeStats.hard.solved}/{leetcodeStats.hard.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-red-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${leetcodeStats.hard.percentage}%` : 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[40%] ">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recent Problems</h4>
            <div className="space-y-2">
              {leetcodeStats.recentProblems.map((problem, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="truncate">{problem.name}</span>
                  <span className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Daily Streak</span>
                <div className="flex items-center gap-1">
                  <FaChartLine className="text-green-500" />
                  <span className="font-medium">12 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CodingStats

