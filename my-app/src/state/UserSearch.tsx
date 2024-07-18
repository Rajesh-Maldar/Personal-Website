import React, { FC, useRef, useState, useEffect } from "react";

const users = [
  { name: "John", age: 20 },
  { name: "Sarah", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const onClick = () => {
    // const filteredUsers = users.filter((u) =>
    //   u.name.toLowerCase().includes(name.toLowerCase())
    // );
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    if (foundUser) {
      setUser(foundUser);
      setError("");
    } else {
      setUser(undefined);
      setError("User not found");
    }

    console.log(foundUser);
  };
  return (
    <div>
      {`Search User` + `  `}
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User </button>
      <p>
        {user ? (
          <>
            Name: {user.name}, Age: {user.age}
          </>
        ) : (
          error
        )}{" "}
      </p>
    </div>
  );
};
export default UserSearch;
