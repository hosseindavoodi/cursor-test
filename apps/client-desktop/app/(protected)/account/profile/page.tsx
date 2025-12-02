import AccountSettings from "./_components/account.settings";
import Bank from "./_components/bank";
import PassportInfo from "./_components/passport.info";
import PersonalInformation from "./_components/personal.information";

function Profile() {
  return (
    <div className="w-full flex flex-col gap-y-[20px]">
      <PersonalInformation />
      <AccountSettings />
      <PassportInfo />
      <Bank />
    </div>
  );
}

export default Profile;
