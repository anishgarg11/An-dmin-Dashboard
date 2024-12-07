export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ₹{params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Anish",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEo1fsT7AJwCA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715547352636?e=1738800000&v=beta&t=ppYG-c8Osgm4Ok6dJLJuoLaVNy9QcGu7ka-YlpCKqCo",
    status: "active",
    email: "garganish55@gmail.com",
    age: 24,
  },
  {
    id: 2,
    username: "Sachin",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzwjs1kBbnprNcSpqcUSzF7wlQLq2QhXp8g&s",
    email: "sachintendulkar@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Virat",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iC6c3M-CEEQ71q36t4z5dVQpWNgT44sjRg&s",
    email: "virat@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Hardik",
    img: "https://www.mumbaiindians.com/static-assets/images/players/large/action-shots/63751.png?v=4.41&w=400",
    email: "hardikpandya@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Arijit Singh",
    img: "https://images.firstpost.com/wp-content/uploads/2022/04/pjimage-2022-04-25T103425.290.jpg?im=FitAndFill=(596,336)",
    email: "arijit@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "lawrence",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "lawrence@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Shreya Goshal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXHrWvaE1ubq_Da_ZSgrzsyO7rxg9cszPIQ&s",
    email: "shreya@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Armaan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Ayushman",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Narender Modi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "modi@gmail.com",
    status: "active",
    age: 65,
  },
];
