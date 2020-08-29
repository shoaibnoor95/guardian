var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");

var SALT_FACTOR = 10;

var userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  phoneNo: { type: String },
  address: { type: String },
  differentMailingAddress: { type: Boolean, default: false },
  streetAddress: { type: String },
  country: { type: String },
  province: { type: String },
  mailingZipcode: { type: String },
  mailingProvince: { type: String },
  addressemploye: { type: String },
  zipcode: { type: String },
  trusted_person: { type: Boolean },
  trustedPersonName: { type: String },
  occupation: { type: String },
  tele_num: { type: Number },
  city: { type: String },
  yearsemploye: { type: String },
  employee_states: { type: String },
  employee_city: { type: String },
  employee_zip: { type: String },
  employee_aptsuite: { type: String },
  date: { type: Date },
  employeerphoneNumber: { type: String },
  relationshipAccountHoler: { type: String },
  registerationType: { type: String },
  productToTrade: { type: String },
  referer: { type: String },
  employee_country: { type: String },
  martial_status: { type: String },
  employee_phone: { type: String },
  depandents: { type: Number },
  trustedPersonPhone: { type: String },
  trustedPersonStreet: { type: String },
  trustedPersonZip: { type: String },
  trustedPersonRelation: { type: String },
  employee: { type: String },
  emplyername: { type: String },
  bussinessname: { type: String },
  companyType: { type: String },
  yearsofbusiness: { type: Number },
  bussinessPHONE: { type: Number },
  trustedPersonState: { type: String },
  trustedPersonStreet: { type: String },
  fac: { type: Number },
  suitNo: { type: String },
  date_of_birth: { type: Date },
  id_type: { type: String },
  exp_date: { type: Date },
  mailingCountry: { type: String },
  issue_date: { type: Date },
  name_of_id: { type: String },
  anual_income: { type: String },
  net_worth: { type: String },
  licenseExp: { type: String },
  liquid_net_worth: { type: String },
  funding: { type: String },
  nAMEOFBANK: { type: String },
  accountNo: { type: String },
  baSwift: { type: String },
  taxStatus: { type: String },
  financialgoal: { type: String },
  investment: { type: String },
  retir_saving: { type: Boolean },
  indi_account: { type: Boolean },
  tax_rate: { type: String },
  tax_residance: { type: String },
  inheritnce: { type: Boolean },
  secu_bnefit: { type: Boolean },
  bank_funding: { type: String },
  broker_account: { type: String },
  affi_zip: { type: String },
  optradio: { type: String },
  affi_entity_name: { type: String },
  affi_adre: { type: String },
  affi_city: { type: String },
  affi_state: { type: String },
  option_check: { type: String },
  future_check: { type: String },
  bond_check: { type: String },
  senior_politician: { type: String },
  beneficial: { type: String },
  shareholder: { type: String },
  household: { type: String },
  securities: { type: String },
  under_us_2: { type: String },
  tax_witholding_2: { type: String },
  compny_name: { type: String },
  municipal: { type: String },
  under_us: { type: String },
  tax_witholding: { type: String },
  institution: { type: String },
  immediate: { type: String },
  stock_check: { type: String },
  bond_opt: { type: String },
  options_opt: { type: String },
  future_opt: { type: String },
  account_risk: { type: String },
  routing: { type: String },
  acc_num: { type: String },
  Stocks: { type: Boolean },
  Bond: { type: Boolean },
  options: { type: Boolean },
  Future: { type: Boolean },
  stock_opt: { type: String },
  agrem: { type: Boolean },
  liquidity_exp: { type: String },
  special_exp: { type: String },
  expenses: { type: String },
  other_input: { type: String },
  another_acc: { type: Boolean },
  place_country: { type: String },
  business_prop: { type: Boolean },
  knowledge: { type: String },
  brokerage: { type: Boolean },
  accountatVelocityClearingLLC: { type: Boolean },
  securitiesexchange: { type: Boolean },
  financial: { type: Boolean },
  withholding: { type: Boolean },
  relativeseniorpoliticalfigure: { type: Boolean },
  confirmed_electronic: { type: Boolean },
  sec: { type: Boolean },
  companyName: { type: String },
  symbolCUSIP: { type: String },
  initialbalance: { type: String },
});

var noop = function () {};

userSchema.pre("save", function (done) {
  var user = this;

  if (!user.isModified("password")) {
    return done();
  }

  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) {
      return done(err);
    }
    bcrypt.hash(user.password, salt, noop, function (err, hashedPassword) {
      if (err) {
        return done(err);
      }
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.checkPassword = function (guess, done) {
  bcrypt.compare(guess, this.password, function (err, isMatch) {
    done(err, isMatch);
  });
};

userSchema.methods.name = function () {
  return this.displayName || this.username;
};

var User = mongoose.model("User", userSchema);

module.exports = User;
