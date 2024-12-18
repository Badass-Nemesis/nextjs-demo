interface UserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error();
    const res = await fetch("https://jsonplaceholder.typicode.com/users123");
    const users = await res.json();

    return (
        <div>
            <ul className="space-y-4 p-4">
                {users.map((user: UserInterface) => (
                    <li key={user.id} className="bg-white p-4 shadow-md rounded-lg text-gray-700">
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}