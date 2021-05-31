const User = ({ userName }) => {
  return <div>{userName}</div>;
};

export async function getServerSideProps(context) {
  return {
    props: {
      userName: `Abhishek-${context.params.uid}`,
    },
  };
}

export default User;
