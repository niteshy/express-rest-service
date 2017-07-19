/**
 * Created by Nitesh on 20/07/17.
 */
const dynamoose = require('dynamoose');

var schemaObj = {
  id: Number,
  externalId: String
};
const EnterpriseProfileSchema = dynamoose.model('EnterpriseProfile', schemaObj);

module.exports = EnterpriseProfileSchema;
