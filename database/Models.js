const { DataTypes } = require("sequelize");
const sequelize = require('./Database_connection');


exports.Address = sequelize.define(
    "Address",
    {
       id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNUll: false,
            autoIncrement: true,
        },
        Addr1: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        Addr2: {
            type: DataTypes.STRING(40),
        },
        City: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        Pin: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    { timestamps: false },
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
        Tel_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(30),
        },
    },
    { timestamps: false }
);

exports.Patients = sequelize.define(
    "Patients",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNUll: false,
            autoIncrement: true,
        },
        reg_no: {
            type: DataTypes.INTEGER,           
            allowNUll: false,
            unique: true,
        },
        p_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        p_Age: {
            type: DataTypes.INTEGER,
        },
        Phone_Num: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        AddressId:{
            type: DataTypes.INTEGER,
            references: {
                model: this.Address,
                key: 'id'            
            }
        },
        ContactId:{
            type: DataTypes.INTEGER,
            references: {
                model: this.Contactinfo,
                key: 'id'
                
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
            allowNUll: false,
        },
        relationship: {
            type: DataTypes.STRING(20),
            allowNUll: false,
        },
        Tel_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reg_no:{
            type: DataTypes.INTEGER,
            references:{
                model: this.Patients,
                key: 'id'
            }
        }
        
    },
    { timestamps: false }
);
