"use client"

import { useState } from "react"
import {
  Bookmark,
  CuboidIcon as CubeIcon,
  Film,
  Layers,
  Music,
  PenTool,
  Search,
  SquareIcon as Square3DIcon,
  Wand2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Video Editor for Corporate Training Series",
    category: "Video Editing",
    budget: "$2,000 - $3,500",
    length: "1 to 4 weeks",
    description:
      "Looking for an experienced video editor to help create a series of corporate training videos. Must be proficient in Adobe Premiere Pro.",
    postedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "3D Character Animator for Mobile Game",
    category: "Animation",
    budget: "$3,000 - $5,000",
    length: "1 to 3 months",
    description:
      "Need a talented animator to create character animations for our upcoming mobile game. Experience with Blender required.",
    postedAt: "5 hours ago",
  },
  {
    id: 3,
    title: "Sound Designer for Short Film",
    category: "Sound Design",
    budget: "$1,500 - $2,500",
    length: "Less than 1 week",
    description: "Seeking a creative sound designer to create atmospheric soundscapes for an indie horror short film.",
    postedAt: "1 day ago",
  },
  {
    id: 4,
    title: "VFX Artist for YouTube Channel",
    category: "VFX",
    budget: "$500 - $1,000",
    length: "Less than 1 week",
    description:
      "Looking for a VFX artist to create special effects for our science education YouTube channel. Regular work available.",
    postedAt: "2 days ago",
  },
]

export default function JobSearch() {
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [budgetMin, setBudgetMin] = useState<string>("")
  const [budgetMax, setBudgetMax] = useState<string>("")
  const [projectLength, setProjectLength] = useState<string | null>(null)

  const toggleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter((id) => id !== jobId))
    } else {
      setSavedJobs([...savedJobs, jobId])
    }
  }

  const filteredJobs = jobs.filter((job) => {
    // Search query filter
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Category filter
    const matchesCategory = !selectedCategory || job.category === selectedCategory

    // Budget filter
    let matchesBudget = true
    if (budgetMin || budgetMax) {
      const jobBudgetRange = job.budget.replace(/[^0-9,-]/g, "").split("-")
      const jobMinBudget = Number.parseInt(jobBudgetRange[0].replace(/,/g, ""))
      const jobMaxBudget = Number.parseInt(jobBudgetRange[1]?.replace(/,/g, "") || jobMinBudget.toString())

      if (budgetMin && Number.parseInt(budgetMin) > jobMaxBudget) {
        matchesBudget = false
      }
      if (budgetMax && Number.parseInt(budgetMax) < jobMinBudget) {
        matchesBudget = false
      }
    }

    // Project length filter
    let matchesLength = true
    if (projectLength) {
      const lengthMap: Record<string, string> = {
        "option-1": "Less than 1 week",
        "option-2": "1 to 4 weeks",
        "option-3": "1 to 3 months",
      }
      matchesLength = lengthMap[projectLength] === job.length
    }

    return matchesSearch && matchesCategory && matchesBudget && matchesLength
  })

  const savedJobsList = jobs.filter((job) => savedJobs.includes(job.id))

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Video Editing":
        return <Film className="h-4 w-4 text-blue-500" />
      case "Motion Graphics":
        return <Layers className="h-4 w-4 text-purple-500" />
      case "Color Grading":
        return <PenTool className="h-4 w-4 text-pink-500" />
      case "VFX":
        return <Wand2 className="h-4 w-4 text-yellow-500" />
      case "Sound Design":
        return <Music className="h-4 w-4 text-green-500" />
      case "Animation":
        return <Film className="h-4 w-4 text-red-500" />
      case "3D Modeling":
        return <Square3DIcon className="h-4 w-4 text-indigo-500" />
      case "Compositing":
        return <Layers className="h-4 w-4 text-orange-500" />
      default:
        return <CubeIcon className="h-4 w-4 text-gray-500" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Video Editing":
        return "bg-blue-500"
      case "Motion Graphics":
        return "bg-purple-500"
      case "Color Grading":
        return "bg-pink-500"
      case "VFX":
        return "bg-yellow-500"
      case "Sound Design":
        return "bg-green-500"
      case "Animation":
        return "bg-red-500"
      case "3D Modeling":
        return "bg-indigo-500"
      case "Compositing":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-background">
      {/* Sidebar */}
      <div className="w-full md:w-64 border-r p-4 bg-background">
        <h2 className="text-xl font-semibold mb-6">Filter</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">CATEGORIES</h3>
            <div className="space-y-2">
              {[
                "Video Editing",
                "Motion Graphics",
                "Color Grading",
                "VFX",
                "Sound Design",
                "Animation",
                "3D Modeling",
                "Compositing",
              ].map((category) => (
                <div
                  key={category}
                  className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${selectedCategory === category ? "bg-blue-50 text-blue-700" : "hover:bg-muted"}`}
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                >
                  <div className={`w-6 h-6 rounded ${getCategoryColor(category)} flex items-center justify-center`}>
                    {getCategoryIcon(category)}
                  </div>
                  <span>{category}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">BUDGET RANGE</h3>
            <div className="flex gap-2">
              <div className="w-1/2">
                <Input
                  placeholder="Min"
                  type="number"
                  value={budgetMin}
                  onChange={(e) => setBudgetMin(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Input
                  placeholder="Max"
                  type="number"
                  value={budgetMax}
                  onChange={(e) => setBudgetMax(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">PROJECT LENGTH</h3>
            <RadioGroup
              value={projectLength || ""}
              onValueChange={(value) => {
                // Toggle selection if clicking the same option
                setProjectLength(value === projectLength ? null : value)
              }}
            >
              <div className="flex items-center space-x-2 py-1">
                <RadioGroupItem value="option-1" id="option-1" />
                <Label htmlFor="option-1">Less than 1 week</Label>
              </div>
              <div className="flex items-center space-x-2 py-1">
                <RadioGroupItem value="option-2" id="option-2" />
                <Label htmlFor="option-2">1 to 4 weeks</Label>
              </div>
              <div className="flex items-center space-x-2 py-1">
                <RadioGroupItem value="option-3" id="option-3" />
                <Label htmlFor="option-3">1 to 3 months</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10"
              placeholder="Search for video editing jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="recent">
            <TabsList className="mb-6 border-b w-full justify-start rounded-none h-auto p-0">
              <TabsTrigger
                value="recent"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-6"
              >
                Most Recent
              </TabsTrigger>
              <TabsTrigger
                value="saved"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-6"
              >
                Saved
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="space-y-4 mt-0">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleSaveJob(job.id)}
                        aria-label={savedJobs.includes(job.id) ? "Unsave job" : "Save job"}
                      >
                        <Bookmark
                          className={`h-5 w-5 ${savedJobs.includes(job.id) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                        {getCategoryIcon(job.category)}
                        <span className="ml-1">{job.category}</span>
                      </div>
                      <div className="text-xs bg-muted px-2 py-1 rounded-full">{job.budget}</div>
                      <div className="text-xs bg-muted px-2 py-1 rounded-full">{job.length}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 text-xs text-muted-foreground">Posted {job.postedAt}</CardFooter>
                </Card>
              ))}
              {filteredJobs.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No jobs found matching your search criteria.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="saved" className="space-y-4 mt-0">
              {savedJobsList.length > 0 ? (
                savedJobsList.map((job) => (
                  <Card key={job.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleSaveJob(job.id)}
                          aria-label="Unsave job"
                        >
                          <Bookmark className="h-5 w-5 fill-primary text-primary" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                          {getCategoryIcon(job.category)}
                          <span className="ml-1">{job.category}</span>
                        </div>
                        <div className="text-xs bg-muted px-2 py-1 rounded-full">{job.budget}</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded-full">{job.length}</div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 text-xs text-muted-foreground">Posted {job.postedAt}</CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">You haven't saved any jobs yet.</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Click the bookmark icon on jobs you're interested in to save them for later.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

