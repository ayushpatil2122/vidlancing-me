import ProfileHeader from "./ProfileHeader";
import ReviewsSection from "./ReviewsSection";
import SkillsSection from "./SkillsSection";
import WorkHistorySection from "./WorkHistorySection";

export default function Profile() {
    return <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <ProfileHeader/>
                    <SkillsSection/>
                    <WorkHistorySection/>
                    <ReviewsSection/>
                </div>
            </div>
        </div>
    </div>
}

