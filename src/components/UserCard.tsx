type UserInfoProps = {
  userAge: number;
  userCity: string;
  userExperience: string;
};

function UserInfo({ userAge, userCity, userExperience }: UserInfoProps) {
  return (
    <div>
      <p>Вік: {userAge}</p>
      <p>Місто: {userCity}</p>
      <p>Досвід: {userExperience}</p>
    </div>
  );
}

export default UserInfo;
