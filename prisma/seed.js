const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const password = bcrypt.hashSync("123456");


const userData = [
  {
    username: "user4",
    password,
    email: "user4@example.com",
    otheruserdetails: "Details for user1",
  },
  {
    username: "user5",
    password,
    email: "user5@example.com",
    otheruserdetails: "Details for user2",
  },
  {
    username: "user6",
    password,
    email: "user6@example.com",
    otheruserdetails: "Details for user3",
  },
];

const run = async () => {
  try {
    await prisma.users.createMany({
      data: userData,
    });

    // สร้างการจอง
    await prisma.booking.createMany({
      data: [
        {
          userId: 7,
          showtimeId: 7,
          movieId: 1,
          numberoftickets: 2,
          bookingdate: new Date(),
          price: 100,
        },
        {
          userId: 8,
          showtimeId: 8,
          movieId: 2,
          numberoftickets: 3,
          bookingdate: new Date(),
          price: 150,
        },
      ],
    });

    // สร้างตั๋ว
    await prisma.tickets.createMany({
      data: [
        { bookingId: 1, seatnumber: 1, tickrtprice: 50 },
        { bookingId: 1, seatnumber: 2, tickrtprice: 50 },
        { bookingId: 2, seatnumber: 1, tickrtprice: 60 },
        { bookingId: 2, seatnumber: 2, tickrtprice: 60 },
      ],
    });

    // สร้างการชำระเงิน
    await prisma.payment.createMany({
      data: [
        { bookingId: 1, amount: 100, paymentdate: new Date() },
        { bookingId: 2, amount: 120, paymentdate: new Date() },
      ],
    });

    // สร้างที่นั่ง
    await prisma.seat.createMany({
      data: [
        { showtimeId: 1, bookingdate: new Date(), number: 1, price: 50 },
        { showtimeId: 1, bookingdate: new Date(), number: 2, price: 50 },
        { showtimeId: 2, bookingdate: new Date(), number: 1, price: 60 },
        { showtimeId: 2, bookingdate: new Date(), number: 2, price: 60 },
      ],
    });

    // สร้างภาพยนตร์
    await prisma.movie.createMany({
      data: [
        {
          title: "Movie 1",
          genre: "Action",
          releasedate: new Date(),
          duration: "2 hours",
        },
        {
          title: "Movie 2",
          genre: "Comedy",
          releasedate: new Date(),
          duration: "1.5 hours",
        },
      ],
    });

    // สร้างรอบฉาย
    await prisma.showtimes.createMany({
      data: [
        {
          movieId: 1,
          theaterid: "A1",
          starttime: new Date(),
          endtime: new Date(),
        },
        {
          movieId: 2,
          theaterid: "B1",
          starttime: new Date(),
          endtime: new Date(),
        },
      ],
    });

    console.log("Seed successful");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
};
run();
