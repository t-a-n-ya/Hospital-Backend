const { DataTypes } = require("sequelize");
const sequelize = require('./Database_connection');


// exports.Address = sequelize.define(
//     "Address",
//     {
//        id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             allowNUll: false,
//             autoIncrement: true,
//         },
//         Addr1: {
//             type: DataTypes.STRING(40),
//         },
//         Addr2: {
//             type: DataTypes.STRING(40),
//         },
//         City: {
//             type: DataTypes.STRING(20),
//         },
//         Pin: {
//             type: DataTypes.INTEGER,
//         }
//     },
//     { timestamps: false },
// );

exports.Patients = sequelize.define(
    "Patients",
    {
        reg_no: {
            type: DataTypes.INTEGER,    
            primaryKey: true,
            allowNUll: false,
            autoIncrement: true,      
        },
        p_name: {
            type: DataTypes.STRING(20),
        },
        p_Age: {
            type: DataTypes.INTEGER,
        },
        
    },
    { timestamps: false }
);


exports.Contactinfo = sequelize.define(
    "Contactinfo",
    {
       id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNUll: false,
            autoIncrement: true,
        },
        Phone_no: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING(30),
        },
        patientId:{
            type: DataTypes.INTEGER,
            references: {
                model: this.Patients,
                key: 'reg_no'
                
            }
        }
    },
    { timestamps: false }
);

exports.Next_to_kin = sequelize.define(
    "Next_to_kin",
    {
       id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNUll: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(30),
        },
        relationship: {
            type: DataTypes.STRING(20),
        },
        Tel_no: {
            type: DataTypes.INTEGER,
        },
        reg_no_fk:{
            type: DataTypes.INTEGER,
            references:{
                model: this.Patients,
                key: 'reg_no'
            }
        }
        
    },
    { timestamps: false }
);
