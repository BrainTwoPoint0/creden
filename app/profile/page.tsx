import ProfileForm from '../../components/profile/ProfileForm';

export default function ProfilePage() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-6">Complete Your Profile</h1>
            <ProfileForm />
        </div>
    );
}
