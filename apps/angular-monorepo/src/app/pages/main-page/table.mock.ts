export interface UserData {
    id: number;
    name: string;
    age: number;
    email: string;
    position: string;
    isActive: boolean;
  }
  
const POSITIONS: string[] = ['Developer', 'Designer', 'Manager', 'QA', 'HR'];
const NAMES: string[] = ['John Doe', 'Jane Doe', 'Mike Tyson', 'Sarah Connor', 'Tony Stark'];

function getRandomFromArray<T>(arr: T[]): T {
return arr[Math.floor(Math.random() * arr.length)];
}

export function generateUsers(): UserData[] {
return Array.from({length: 30}, (_, k) => createNewUser(k + 1));
}

function createNewUser(id: number): UserData {
return {
    id: id,
    name: getRandomFromArray(NAMES),
    age: Math.floor(Math.random() * 30) + 20,
    email: `user${id}@example.com`,
    position: getRandomFromArray(POSITIONS),
    isActive: Math.random() > 0.5
};
}