const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];

module.exports.config = {
  name: "autoreplybot",
  version: "6.0.2",
  hasPermssion: 0,
  credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
  description: "Auto-response bot with specified triggers",
  commandCategory: "No Prefix",
  usages: "[any trigger]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return; 
  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    "জুই": "ভিডিও কলে সেক্স করতে চাইলে জুই আপুকে মেসেন দাও। কাজের আগে ১ মিনিট স্যাম্পল দেখানো হয়🫦\nজুই আপু : https://www.facebook.com/profile.php?id=61582798155039",
    "jui": "ভিডিও কলে সেক্স করতে চাইলে জুই আপুকে মেসেন দাও। কাজের আগে ১ মিনিট স্যাম্পল দেখানো হয়🫦\nজুই আপু : https://www.facebook.com/profile.php?id=61582798155039",
    "gui": "ভিডিও কলে সেক্স করতে চাইলে জুই আপুকে মেসেন দাও। কাজের আগে ১ মিনিট স্যাম্পল দেখানো হয়🫦\nজুই আপু : https://www.facebook.com/profile.php?id=61582798155039",
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};
