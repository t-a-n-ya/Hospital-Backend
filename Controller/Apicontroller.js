const { Address, Next_to_kin, Contactinfo, Patients } = require("../database/Models");
const {
  RESPONSE_STATUS,
  SUCCESS_RESPONSE,
  FAILED_RESPONSE,
} = require("../Constants");

exports.getAddressData = async (req, res) => {
  try {
    let data = await Address.findAll({});

    return res.json({
      message: SUCCESS_RESPONSE.FETCH_SUCESS,
      data: data,
      status: RESPONSE_STATUS.OK,
    });
  } catch (error) {
    return res.json({
      status: RESPONSE_STATUS.INTERNAL_SERVER_ERRROR,
      errorcode: error,
      message: FAILED_RESPONSE.FETCH_FAILED,
    });
  }
}

exports.getContactinfoData = async (req, res) => {
  try {
    let data = await Contactinfo.findAll({});

    return res.json({
      message: SUCCESS_RESPONSE.FETCH_SUCESS,
      data: data,
      status: RESPONSE_STATUS.OK,
    });
  } catch (error) {
    return res.json({
      status: RESPONSE_STATUS.INTERNAL_SERVER_ERRROR,
      errorcode: error,
      message: FAILED_RESPONSE.FETCH_FAILED,
    });
  }
}


exports.GetNexttokinData = async (req, res) => {
  try {
    let data = await Next_to_kin.findAll({});

    return res.json({
      message: SUCCESS_RESPONSE.FETCH_SUCESS,
      data: data,
      status: RESPONSE_STATUS.OK,
    });
  } catch (error) {
    return res.json({
      status: RESPONSE_STATUS.INTERNAL_SERVER_ERRROR,
      errorcode: error,
      message: FAILED_RESPONSE.FETCH_FAILED,
    });
  }
}


exports.GetPatientsData = async (req, res) => {
  try {
    let data = await Patients.findAll({});

    return res.json({
      message: SUCCESS_RESPONSE.FETCH_SUCESS,
      data: data,
      status: RESPONSE_STATUS.OK,
    });
  } catch (error) {
    return res.json({
      status: RESPONSE_STATUS.INTERNAL_SERVER_ERRROR,
      errorcode: error,
      message: FAILED_RESPONSE.FETCH_FAILED,
    });
  }
}


exports.createform = async (req, res) => {
  let { reg_no, p_name, p_Age, Phone_no, email, name, relationship, Tel_no,name2, relationship2, Tel_no2 } = req.body;
  try {
    let dataObj = await Patients.create({
      reg_no: reg_no,
      p_name: p_name,
      p_Age: p_Age,
    });
    let dataObj2 = await Contactinfo.create({
      Phone_no: Phone_no,
      email: email,
      patientId: reg_no
    })
    let dataObj3 = await Next_to_kin.bulkCreate([
      {name: name,
      relationship: relationship,
      Tel_no: Tel_no,
      reg_no_fk:reg_no},
      {name:name2,
      relationship:relationship2,
      Tel_no:Tel_no2,
      reg_no_fk:reg_no}
    ])
    let dataobj4 = { ...dataObj, ...dataObj2, ...dataObj3 }
    res.json({
      data: dataobj4,
      message: SUCCESS_RESPONSE.CREATED_SUCCESSFULLY,
    });
  } catch (error) {
    res.json({
      error: error,
      message: FAILED_RESPONSE.CREATION_FAILED,
    });
  }
};

exports.updateform = async (req, res) => {
  const { regNo, pName, pAge, phoneNo, email, KinName, Kinrel, Kintel } = req.body.data.updatedData;

  try {
    let data = await Patients.update(
      {
        p_name: pName,
        p_Age: pAge,
      },
      {
        where: {
          reg_no: regNo,
        },
      }
    );
    let data2 = await Contactinfo.update(
      {
        Phone_no:phoneNo,
        email:email,
      },
      {
        where: {
        patientId: regNo,
        },
      }
    )
    let data3 = await Next_to_kin.update(
      {
        name: KinName,
        relationship:Kinrel,
        Tel_no:Kintel,
      },
      {
        where: {
          reg_no_fk: reg_no,
        },
      }
    )
    let data4 = {...data, ...data2, ...data3}
    res.json({
      data: data4,
      status: RESPONSE_STATUS.OK,
      message: SUCCESS_RESPONSE.UPDATE_SUCCESSFULL,
    });
  } catch (error) {
    res.json({
      error: error,
      status: RESPONSE_STATUS.INTERNAL_SERVER_ERRROR,
      message: FAILED_RESPONSE.UPDATE_FAILED,
    });
  }
};

exports.deleteform = async (req, res) => {
  let reg_num = req.params["reg_no"];
  console.log(reg_num);
  try {
    await Contactinfo.destroy({
      where: {
        patientId: reg_num,
      },
    });
    await Next_to_kin.destroy({
      where: {
        reg_no_fk: reg_num,
      },
    });
    await Patients.destroy({
      where: {
        reg_no: reg_num,
      },
    });
    res.json({
      status: RESPONSE_STATUS.OK,
      message: SUCCESS_RESPONSE.DELETE_SUCCESSFULL,
    });
  } catch (e) {
    res.json({
      error: e,
      status: RESPONSE_STATUS.INTERNAL_SERVER_ERRROR,
      message: FAILED_RESPONSE.DELETE_FAILED,
    });
  }
};