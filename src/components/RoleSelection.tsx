"use client"

import { useRouter } from 'next/navigation'
import { Film, Briefcase } from 'lucide-react'

export default function RoleSelection() {
  const router = useRouter()

  const handleRoleSelection = (role: string) => {
    localStorage.setItem('userRole', role)
    navigateToRolePage(role)
  }

  const navigateToRolePage = (role: string) => {
    if (role === 'freelancer') {
      router.push('/Freelancer/Home')
    } else if (role === 'employer') {
      router.push('/Employer/Home')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Role
          </h1>
          <p className="text-gray-600 mb-12">
            Select how you want to use our video editing freelancing platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 p-8 pt-0">
          <div 
            onClick={() => handleRoleSelection('freelancer')}
            className="cursor-pointer group border-2 border-gray-100 rounded-2xl p-6 text-center transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
          >
            <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
              <Film className="w-10 h-10 text-blue-500 group-hover:text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600">
              Freelancer
            </h2>
            <p className="text-gray-600 mb-6">
              I want to offer my video editing skills and find exciting projects
            </p>
            <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg inline-block group-hover:bg-blue-100 transition-colors">
              Find Work
            </div>
          </div>
          <div 
            onClick={() => handleRoleSelection('employer')}
            className="cursor-pointer group border-2 border-gray-100 rounded-2xl p-6 text-center transition-all duration-300 hover:border-green-500 hover:shadow-xl"
          >
            <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
              <Briefcase className="w-10 h-10 text-green-500 group-hover:text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600">
              Employer
            </h2>
            <p className="text-gray-600 mb-6">
              I'm looking to hire talented video editing professionals
            </p>
            <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg inline-block group-hover:bg-green-100 transition-colors">
              Post a Project
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}