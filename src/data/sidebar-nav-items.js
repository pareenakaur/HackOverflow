export default function() {
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "Financial News Insights ",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "AI Chatbot",
      htmlBefore: '<i class="material-icons">chat_bubble</i>',
      to: "/add-new-post",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
  ];
}
