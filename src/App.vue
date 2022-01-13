<script lang="ts">
/**
 * App
 * @date 2022-01-06
 */
import { defineComponent } from "vue";
import { RouteRecord, RouteRecordRaw, RouteRecordNormalized } from "vue-router";

interface IComponentData {
  ready: boolean;
  displayMode: string;
  activeSectionPath: string;
}

export default defineComponent({
  components: {},
  data() {
    return {
      ready: true,
      displayMode: "screen",
      activeSectionPath: ""
    } as IComponentData;
  },
  computed: {
    inProduction(): boolean {
      return false;
    },
    navigationItems(): RouteRecordRaw[] {
      return this.$router.options.routes.filter((route: RouteRecordRaw) => route.name != undefined);
    },
    isPrintMode(): boolean {
      // navigator.
      return false;
    }
  },
  watch: {
    "$route"() {
      let routes: RouteRecordRaw[] = this.$router.options.routes;
      routes.forEach((route: RouteRecordRaw, index: number) => {
        if (route.path == this.$route.path) {
          if (route.name) this.activeSectionPath = route.path;
          else for (let n = index; n >= 0; n--) {
            if (routes[n].name) {
              this.activeSectionPath = routes[n].path;
              break;
            }
          }
        }
      });
    }
  },
  methods: {
    navigate(evt: KeyboardEvent) {
      let routes: RouteRecordNormalized[] = this.$router.getRoutes(),
        currentRouteIndex: number = routes.findIndex(
          (route: RouteRecordNormalized) => route.path == this.$route.path
        );
      if (evt.code == "ArrowLeft" && currentRouteIndex > 0) {
        let prevRoute: RouteRecordNormalized = routes[currentRouteIndex - 1];
        this.$router.push(prevRoute);
      } else if (
        evt.code == "ArrowRight" &&
        currentRouteIndex < routes.length - 2
      ) {
        let nextRoute: RouteRecordNormalized = routes[currentRouteIndex + 1];
        this.$router.push(nextRoute);
      }
    },
    togglePrintMode(mql: MediaQueryList, ev?: MediaQueryListEvent): void {
      if (mql) this.displayMode = mql.matches ? "print" : "screen";
    }
  },
  created() {
  },
  mounted() {
    window.addEventListener("keyup", this.navigate);
    let mediaQueryList: MediaQueryList = window.matchMedia('print');
    this.togglePrintMode(mediaQueryList);
    //@ts-ignore
    mediaQueryList.addEventListener("change", this.togglePrintMode);
    //@ts-ignore
    window.addEventListener("onbeforeprint", this.togglePrintMode);
  },
  unmounted() {
    //@ts-ignore
    window.removeEventListener("onbeforeprint", this.togglePrintMode)
  }
});
</script>

<template>
  <div>
    <main v-if="ready && displayMode == 'screen'">
      <section>
        <router-view />
        <aside>
          <router-link
            v-for="(nav,n) in navigationItems"
            :key="n"
            :to="nav.path"
          >
            <svg style="width:32px;height:32px" viewBox="0 0 24 24">
              <path v-show="nav.path == activeSectionPath" 
                fill="#ffe600"
                d="M17,12L12,17V14H8V10H12V7L17,12M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M5,19H19V5H5V19Z"
              />
            </svg>
            <span>{{ nav.name }}</span>
          </router-link>
        </aside>
      </section>
    </main>
    <main v-if="ready && displayMode == 'print'">
      <section v-for="(route,r) in $router.options.routes" :key="r">
        <p>{{ route.name ? route.name : route.path }}</p>
        <component v-if="route.component" :is="route.component.name" />
      </section>
    </main>
  </div>
</template>
