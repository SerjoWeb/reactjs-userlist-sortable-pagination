// Import axios
import axios from 'axios';

// Import zustand store (I used Zustand cuz it's more understandable and easier than Redux)
import create from 'zustand';

// init interface for Users item
interface Users {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// init interface for Users store
interface Userstore {
  users: Users[];
  fetch: (url: string) => Promise<any>;
  sort: () => void;
}

/** Create User Store */
const useUsers = create<Userstore>((set, get) => ({
  users: [] as any,
  fetch: async (url: string) => {
    const response = await axios.get(url);
    set({
      users: await response.data
    });
  },
  sort: () => {
    set((state) => ({
      users: [...state.users.reverse()]
    }));
  }
}));

/** Export User Store */
export default useUsers;
