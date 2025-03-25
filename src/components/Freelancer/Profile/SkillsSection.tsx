"use client"
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter 
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SkillsSection() {
  const [skills, setSkills] = useState([
    { name: 'Video Production', highlighted: true },
    { name: 'Product Photography', highlighted: true },
    { name: 'Commercial Photography', highlighted: false },
    { name: 'Video Editing', highlighted: true },
    { name: 'Lifestyle Photography', highlighted: false },
    { name: 'Brand Photography', highlighted: true },
    { name: 'Adobe Premiere Pro', highlighted: false },
    { name: 'Final Cut Pro', highlighted: false },
    { name: 'Studio Lighting', highlighted: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      const skillToAdd = {
        name: newSkill.trim(),
        highlighted: isHighlighted
      };
      
      // Check if skill already exists
      const skillExists = skills.some(
        skill => skill.name.toLowerCase() === skillToAdd.name.toLowerCase()
      );

      if (!skillExists) {
        setSkills([...skills, skillToAdd]);
        setNewSkill('');
        setIsHighlighted(false);
        setIsModalOpen(false);
      } else {
        // Optional: Add some error handling for duplicate skills
        alert('This skill already exists!');
      }
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Skills</h3>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Skill
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Skill</DialogTitle>
              <DialogDescription>
                Enter a new skill to showcase your expertise.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="newSkill" className="text-right">
                  Skill Name
                </Label>
                <Input 
                  id="newSkill" 
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="col-span-3" 
                  placeholder="Enter skill name"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skillHighlight" className="text-right">
                  Highlight
                </Label>
                <div className="col-span-3 flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="skillHighlight"
                    checked={isHighlighted}
                    onChange={(e) => setIsHighlighted(e.target.checked)}
                    className="mr-2"
                  />
                  <Label htmlFor="skillHighlight">
                    Mark as key skill
                  </Label>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="submit" 
                onClick={handleAddSkill}
                disabled={!newSkill.trim()}
              >
                Add Skill
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`rounded-full px-4 py-1.5 text-sm ${
              skill.highlighted
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}