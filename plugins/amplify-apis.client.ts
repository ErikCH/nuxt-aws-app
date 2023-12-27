import {
  fetchAuthSession,
  fetchUserAttributes,
  signIn,
  signOut,
} from "aws-amplify/auth";
import { list } from "aws-amplify/storage";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";
import "@aws-amplify/ui-vue/styles.css";

export default defineNuxtPlugin({
  name: "AmplifyAPIs",
  enforce: "pre",
  hooks: {
    "app:beforeMount"() {
      Amplify.configure(config, { ssr: true });
    },
  },

  setup() {
    return {
      provide: {
        // You can more APIs here as needed
        // and you don't need to follow the object shape
        Amplify: {
          Auth: {
            fetchAuthSession,
            fetchUserAttributes,
            signIn,
            signOut,
          },
          Storage: {
            list,
          },
        },
      },
    };
  },
});
