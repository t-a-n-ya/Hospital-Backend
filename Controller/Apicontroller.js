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
