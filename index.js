const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost:27017/HumanResource';
const employee = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  salary: {
    type: String,
  },
  department: {
    type: String,
  },
  lastCompany: {
    type: String,
  },
  lastSalary: {
    type: String,
  },
  overallExp: {
    type: String,
  },
  contactInfo: {
    type: String,
  },
  yearGrad: {
    type: String,
  },
  gradStream: {
    type: String,
  },
});

async function main() {
  try {
    await mongoose.connect(url);
    const employeeData = mongoose.model('employee', employee);
    const res = await employeeData.insertMany([
      {
        firstName: 'John',
        lastName: 'Doe',
        salary: '25000',
        department: 'HR',
        lastCompany: 'X',
        lastSalary: '10000',
        overallExp: '2',
        contactInfo: '1234567890',
        yearGrad: '2016',
        gradStream: 'CSE',
      },
      {
        firstName: 'Rohan',
        lastName: 'Jame',
        salary: '30000',
        department: 'Technical',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '1',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE',
      },
      {
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: '1',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'ECE',
      },
      {
        firstName: 'Sao',
        lastName: 'Avika',
        salary: '30000',
        department: 'Sales',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE',
      },
      {
        firstName: 'Jame',
        lastName: 'roh',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'EEE',
      },
      {
        firstName: 'Rohan',
        lastName: 'Jame',
        salary: '30000',
        department: 'Technical',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '1',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE',
      },
      {
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: '1',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'ECE',
      },
      {
        firstName: 'Sao',
        lastName: 'Avika',
        salary: '30000',
        department: 'Sales',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE',
      },
      {
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'EEE',
      },
      {
        firstName: 'Rohan',
        lastName: 'Jame',
        salary: '30000',
        department: 'Technical',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '1',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE',
      },
      {
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '20000',
        overallExp: '1',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'ECE',
      },
      {
        firstName: 'Sao',
        lastName: 'Avika',
        salary: '30000',
        department: 'Sales',
        lastCompany: 'Y',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '1234567860',
        yearGrad: '2015',
        gradStream: 'CSE',
      },
      {
        firstName: 'Jame',
        lastName: 'Doe',
        salary: '35000',
        department: 'Accounts',
        lastCompany: 'Z',
        lastSalary: '15000',
        overallExp: '2',
        contactInfo: '123567890',
        yearGrad: '2019',
        gradStream: 'EEE',
      },
    ]);

    const response1 = await employeeData.find({});
    console.log(response1);
    const response2 = await employeeData.find({ salary: { $gt: '30000' } });
    console.log(response2);
    const response3 = await employeeData.find({ overallExp: { $gt: 1 } });
    console.log(response3);
    const response4 = await employeeData.find({
      yearGrad: { $gt: '2015' },
      overallExp: { $gt: '1' },
    });
    console.log(response4);
    const response5 = await employeeData.updateMany(
      {
        salary: { $gt: '30000' },
      },
      {
        $set: {
          salary: '65000',
        },
      }
    );
    console.log(response5);
    const response6 = await employeeData.deleteMany({ lastCompany: 'Y' });
  } catch (error) {
    console.log(error);
  }
  console.log(response6);
}

main();