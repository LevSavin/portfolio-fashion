import settingsState from "./modules/settings/state";
import settingsActions from "./modules/settings/actions";
import settingsMuations from "./modules/settings/mutations";
import settingsGetters from "./modules/settings/getters";

export default {
  settings: {
    namespaced: true,
    state: settingsState,
    actions: settingsActions,
    mutations: settingsMuations,
    getters: settingsGetters,
  },
};
