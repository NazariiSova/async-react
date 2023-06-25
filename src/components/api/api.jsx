import axios from "axios";

const fetchUserByID = async (userInfo) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?id=${userInfo}`
  );
  const user = response.data;
  return user;
};
export default fetchUserByID;

export const fetchPost = async (setPosts) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  