module.exports.config = {
 name: "adminmention",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU ",
 description: "Bot will reply when someone tags any of the admins",
 commandCategory: "Other",
 usages: "@",
 cooldowns: 1
};

module.exports.handleEvent = function({ api, event }) {
 const adminIDs = ["61575698041722", "100001039692046", "61576394315037"].map(String);
 
 if (adminIDs.includes(String(event.senderID))) return;

 const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
 const isMentioningBoss = adminIDs.some(adminID => mentionedIDs.includes(adminID));

 if (isMentioningBoss) {
 const replies = [
 "জুই আপুকে ডাকছো কেনো? কাজ করবা নাকি? কাজ করলে সরাসরি জুই আপুর ইনবক্সে মেসেজ দাও💓\n\nজুই আপু : https://www.facebook.com/profile.php?id=61582798155039",
 ];
 return api.sendMessage(replies[Math.floor(Math.random() * replies.length)], event.threadID, event.messageID);
 }
};

module.exports.run = async function() {};
