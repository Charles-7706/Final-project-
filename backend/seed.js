require('dotenv').config();
const mongoose = require('mongoose');

const Institution = require('./models/instituitions');// adjust path if needed

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Mock data
const institutions = [
  {
    _id: "674000000000000000000001",
    name: "University of Nairobi",
    code: "university_of_nairobi",
    location: "Nairobi"
  },
  {
    _id: "674000000000000000000002",
    name: "Moi University",
    code: "moi_university",
    location: "Eldoret"
  },
  {
    _id: "674000000000000000000003",
    name: "Kenyatta University",
    code: "kenyatta_university",
    location: "Nairobi"
  },
  {
    _id: "674000000000000000000004",
    name: "Jomo Kenyatta University of Agriculture and Technology",
    code: "jkuat",
    location: "Juja"
  },
  {
    _id: "674000000000000000000005",
    name: "Egerton University",
    code: "egerton_university",
    location: "Njoro"
  },
  {
    _id: "674000000000000000000006",
    name: "Maseno University",
    code: "maseno_university",
    location: "Maseno"
  },
  {
    _id: "674000000000000000000007",
    name: "Masinde Muliro University of Science and Technology",
    code: "masinde_muliro",
    location: "Kakamega"
  },
  {
    _id: "674000000000000000000008",
    name: "Kabarak University",
    code: "kabarak_university",
    location: "Nakuru"
  },
  {
    _id: "674000000000000000000009",
    name: "Karatina University",
    code: "karatina_university",
    location: "Karatina"
  },
  {
    _id: "674000000000000000000010",
    name: "Laikipia University",
    code: "laikipia_university",
    location: "Nyahururu"
  },
  {
    _id: "674000000000000000000011",
    name: "Kisii University",
    code: "kisii_university",
    location: "Kisii"
  },
  {
    _id: "674000000000000000000012",
    name: "Chuka University",
    code: "chuka_university",
    location: "Chuka"
  },
  {
    _id: "674000000000000000000013",
    name: "Garissa University",
    code: "garissa_university",
    location: "Garissa"
  },
  {
    _id: "674000000000000000000014",
    name: "Turkana University",
    code: "turkana_university",
    location: "Lodwar"
  },
  {
    _id: "674000000000000000000015",
    name: "Wajir University",
    code: "wajir_university",
    location: "Wajir"
  },
  {
    _id: "674000000000000000000016",
    name: "Kibabii University",
    code: "kibabii_university",
    location: "Bungoma"
  },
  {
    _id: "674000000000000000000017",
    name: "Karatina University",
    code: "karatina_university",
    location: "Karatina"
  },
  {
    _id: "674000000000000000000018",
    name: "Other Public Institution",
    code: "kuccps_other_public_1",
    location: "Various"
  }
];


module.exports = institutions;

async function seedDB() {
  try {
    await Institution.deleteMany({}); // optional: clear existing data
    await Institution.insertMany(institutions);
    console.log("Mock hostels added successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

seedDB();
