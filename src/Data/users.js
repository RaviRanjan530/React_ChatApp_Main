import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Ravi Ranjan",
      image:user.image,
    
      contacts: [
        {
          id: 2,
          name: "Yogesh",
          image:
            "https://www.shutterstock.com/shutterstock/photos/2343800747/display_1500/stock-photo-an-old-barn-in-north-hero-vermont-phto-illustration-2343800747.jpg",
          chatlog: [
            {
              text: "Hi Bro,How are you!",
              timestamp: "11:21 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Yogesh. How are you!",
              timestamp: "11:22 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Ravi.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Oky Bro !",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Vinay",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32aVW5Eh2jgZcTbA5_d9AuLSd3nogK6lBIDJIP3yz0-P5JasgbgEc5IhDpgZhtABnwxk&usqp=CAU",
    
          chatlog: [
            {
              text: "Hi !",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Ravi.... How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great,Dear.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Or maybe not, let me check something and call you. Give me sometime",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Where r u ??",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Shalu",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgL-e-Xfh9GaTRs6TyqN6Kcq8qXWgZ88lycw5Vyr8U&s",
          chatlog: [
            {
              text: "Hi Ravi,!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Shalu. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Ravi.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Priyanka",
          image:
            "https://previews.123rf.com/images/simonekesh/simonekesh1404/simonekesh140400012/27888926-group-of-girls-make-herself-a-phto-with-a-digital-camera.jpg",
          chatlog: [],
        },
        {
          id: 6,
          name: "Mukesh",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBueV2soP0qjnPhGSeAKFH0y9dSh5Tri7kAIug9KlM&s",
          chatlog: [
            {
              text: "Hey Ravi, where is ur Big bro?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know anything about that, bhai",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure,  Ravi.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes,  I am sure",
              timestamp: "10:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right Mukesh...",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Ranjan",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSMEDR9V6yC4am7uRoVuJVmx7VGvU9qKtByjKTI-N&s",
          chatlog: [
            {
              text: "Kahan hai Bhai",
              timestamp: "10:06 AM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market",
              timestamp: "10:06 AM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ....",
              timestamp: "10:07 AM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "10:08 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "R u okay??",
              timestamp: "10:09 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Hmmmmm!",
              timestamp: "10:09 AM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "John",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0HTlaAFPyzOhWQy360vm1k5u2B51PWDhkBzHDLNE&s",
            // "https://global-uploads.webflow.com/5d121ce15cf154f8f7d91740/5fb7e016798aa0ccca2ca0ba_Abhishek%20Dwivedi.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Ram",
          image:
            "https://thumbs.dreamstime.com/b/aerial-phto-palma-de-mallorca-coastal-seaside-stony-beaches-turquoise-colored-mediterranean-sea-water-panoramic-waterside-view-152823058.jpg",
          chatlog: [],
        },
      ],
    },
  };