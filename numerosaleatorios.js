export default function ok() {
  let Array = [
    {id: 1, light: 0},
    {id: 2, light: 0},
    {id: 3, light: 0},
    {id: 4, light: 0},
    {id: 5, light: 0},
    {id: 6, light: 0},
    {id: 7, light: 0},
    {id: 8, light: 0},
    {id: 9, light: 0},
    {id: 10, light: 0},
    {id: 11, light: 0},
    {id: 12, light: 0},
    {id: 13, light: 0},
    {id: 14, light: 0},
    {id: 15, light: 0},
    {id: 16, light: 0},
    {id: 17, light: 0},
    {id: 18, light: 0},
    {id: 19, light: 0},
    {id: 20, light: 0},
    {id: 21, light: 0},
    {id: 22, light: 0},
    {id: 23, light: 0},
    {id: 24, light: 0},
    {id: 25, light: 0},
    {id: 26, light: 0},
    {id: 27, light: 0},
    {id: 28, light: 0},
    {id: 29, light: 0},
    {id: 30, light: 0},
    {id: 31, light: 0},
    {id: 32, light: 0},
    {id: 33, light: 0},
    {id: 34, light: 0},
    {id: 35, light: 0},
    {id: 36, light: 0},
    {id: 37, light: 0},
    {id: 38, light: 0},
    {id: 39, light: 0},
    {id: 40, light: 0},
    {id: 41, light: 0},
    {id: 42, light: 0},
    {id: 43, light: 0},
    {id: 44, light: 0},
    {id: 45, light: 0},
    {id: 46, light: 0},
    {id: 47, light: 0},
    {id: 48, light: 0},
    {id: 49, light: 0},
    {id: 50, light: 0},
    {id: 51, light: 0},
    {id: 52, light: 0},
    {id: 53, light: 0},
    {id: 54, light: 0},
    {id: 55, light: 0},
    {id: 56, light: 0},
    {id: 57, light: 0},
    {id: 58, light: 0},
    {id: 59, light: 0},
    {id: 60, light: 0},
    {id: 61, light: 0},
    {id: 62, light: 0},
    {id: 63, light: 0},
    {id: 64, light: 0},
    {id: 65, light: 0},
    {id: 66, light: 0},
    {id: 67, light: 0},
    {id: 68, light: 0},
    {id: 69, light: 0},
    {id: 70, light: 0},
    {id: 71, light: 0},
    {id: 72, light: 0},
    {id: 73, light: 0},
    {id: 74, light: 0},
    {id: 75, light: 0},
    {id: 76, light: 0},
    {id: 77, light: 0},
    {id: 78, light: 0},
    {id: 79, light: 0},
    {id: 80, light: 0},
    {id: 81, light: 0},
    {id: 82, light: 0},
    {id: 83, light: 0},
    {id: 84, light: 0},
    {id: 85, light: 0},
    {id: 86, light: 0},
    {id: 87, light: 0},
    {id: 88, light: 0},
    {id: 89, light: 0},
    {id: 90, light: 0},
    {id: 91, light: 0},
    {id: 92, light: 0},
    {id: 93, light: 0},
    {id: 94, light: 0},
    {id: 95, light: 0},
    {id: 96, light: 0},
    {id: 97, light: 0},
    {id: 98, light: 0},
    {id: 99, light: 0},
    {id: 100, light: 0},
  ];

  const limite = Math.floor(Math.random() * (10 - 6)) + 6;

  for (let i = 0; i < limite; i++) {
    const a = Math.floor(Math.random() * (121 - 1)) + 1;
    const NewRanking = Array.map((user) => {
      if (user.id === a) {
        return {...user, light: 1};
      }
      return user;
    });
    Array = NewRanking;
  }

  return Array;
}
