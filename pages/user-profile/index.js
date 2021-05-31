const UserProfile = ({ userName }) => {
  return <div>{userName}</div>;
};

export async function getServerSideProps(context) {
  return {
    props: {
      userName: "Abhishek",
    },
  };
}

export default UserProfile;
