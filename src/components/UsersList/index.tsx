import { User } from "../../App";
const UsersList = (props: { usersList: User[] }) => {
  return (
    <ul>
      {props.usersList.map((user) => {
        return (
          <li key={user.id}>{`
            ${user.name} (${user.age} years old)
        `}</li>
        );
      })}
    </ul>
  );
};

export { UsersList };
