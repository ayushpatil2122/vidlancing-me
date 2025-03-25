"use client"
import { useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { CheckCircle, MapPin, Share2, Plus, Edit, X } from 'lucide-react';
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

export default function ProfileHeader() {
  const { user } = useUser();
  const [profileInfoTitle, setProfileInfoTitle] = useState<string>("Creative Photography & Videography Professional");
  const [profileInfo, setProfileInfo] = useState<string>(`Professional photographer and videographer specializing in product photography, commercial videos, and brand storytelling. 
  Creating compelling visual content for e-commerce and digital marketing.`);
  const [location, setLocation] = useState<string>("New York, USA");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [tempProfileInfoTitle, setTempProfileInfoTitle] = useState<string>(profileInfoTitle);
  const [tempProfileInfo, setTempProfileInfo] = useState<string>(profileInfo);
  const [tempLocation, setTempLocation] = useState<string>(location);

  const handleSaveProfileInfo = () => {
    // Update the actual profile info
    setProfileInfoTitle(tempProfileInfoTitle);
    setProfileInfo(tempProfileInfo);
    setLocation(tempLocation);
    
    // Close the modal
    setIsModalOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    // Only allow closing via save or explicit close button
    if (open) {
      // Reset temp values when opening
      setTempProfileInfoTitle(profileInfoTitle);
      setTempProfileInfo(profileInfo);
      setTempLocation(location);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10"
                }
              }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{user?.fullName || 'User'}</h1>
              <CheckCircle className="h-5 w-5 text-blue-500" />
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <div className="flex items-center">
                <div className="h-2 w-16 rounded-full bg-blue-500"></div>
                <div className="h-2 w-16 rounded-full bg-gray-200"></div>
              </div>
              <span className="text-sm text-gray-600">65% Job Success</span>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>
      </div>
      
      {(profileInfoTitle.trim().length === 0 || profileInfo.trim().length === 0) ? (
        <div className="mt-6 flex items-center justify-between">
          <p className="text-gray-500">Add your professional profile information</p>
          <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Profile Info
              </Button>
            </DialogTrigger>
            <DialogContent 
              onOpenAutoFocus={(e) => e.preventDefault()}
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <DialogHeader>
                <DialogTitle>Add Profile Information</DialogTitle>
                <DialogDescription>
                  Tell us about your professional background and skills.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="profileTitle" className="text-right">
                    Profile Title
                  </Label>
                  <Input 
                    id="profileTitle" 
                    value={tempProfileInfoTitle}
                    onChange={(e) => setTempProfileInfoTitle(e.target.value)}
                    className="col-span-3" 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="profileDescription" className="text-right">
                    Profile Description
                  </Label>
                  <Input 
                    id="profileDescription" 
                    value={tempProfileInfo}
                    onChange={(e) => setTempProfileInfo(e.target.value)}
                    className="col-span-3" 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input 
                    id="location" 
                    value={tempLocation}
                    onChange={(e) => setTempLocation(e.target.value)}
                    className="col-span-3" 
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleSaveProfileInfo}>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div className="mt-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">{profileInfoTitle}</h2>
            <p className="mt-2 text-gray-600">
              {profileInfo}
            </p>
          </div>
          <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent 
              onOpenAutoFocus={(e) => e.preventDefault()}
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <DialogHeader>
                <DialogTitle>Edit Profile Information</DialogTitle>
                <DialogDescription>
                  Update your professional background and skills.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="profileTitle" className="text-right">
                    Profile Title
                  </Label>
                  <Input 
                    id="profileTitle" 
                    value={tempProfileInfoTitle}
                    onChange={(e) => setTempProfileInfoTitle(e.target.value)}
                    className="col-span-3" 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="profileDescription" className="text-right">
                    Profile Description
                  </Label>
                  <Input 
                    id="profileDescription" 
                    value={tempProfileInfo}
                    onChange={(e) => setTempProfileInfo(e.target.value)}
                    className="col-span-3" 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input 
                    id="location" 
                    value={tempLocation}
                    onChange={(e) => setTempLocation(e.target.value)}
                    className="col-span-3" 
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleSaveProfileInfo}>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}