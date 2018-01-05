module.exports = {
  get_root_info: function (req, res) {
    res.send('Hello World!');
  },

  get_cf_envs: function (req, res) {
    if (process.env.VCAP_APPLICATION) {
      var appInfo = JSON.parse(process.env.VCAP_APPLICATION);
      res.json(appInfo);
    }
  },

  get_app_name: function (req, res) {
    if (process.env.VCAP_APPLICATION) {
      var appInfo = JSON.parse(process.env.VCAP_APPLICATION);
      res.send(appInfo.name);
    }
  },

  get_app_space: function (req, res) {
    if (process.env.VCAP_APPLICATION) {
      var appInfo = JSON.parse(process.env.VCAP_APPLICATION);
      res.send(appInfo.space_name);
    }
  },
};
