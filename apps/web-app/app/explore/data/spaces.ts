// const spaces = [{
//   name:"Subscribed",
//   href:"/example/explore/spaces/subscribed"
// }]

export const spaces = [
  "Subscribed",
  "Favorited",
  "Commented",
  "Invested",
]

export type Space = (typeof spaces)[number]
