import { UserProfile } from "../features/user/components/UserProfile";

export const UserProfilePage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
          My Profile
        </h1>
      </div>
      <UserProfile />
    </>
  );
};
