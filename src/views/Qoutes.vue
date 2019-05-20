<template>
  <div>
    <QoutesProggressBar props="[qouteList.length,maxQouteCount]">
      <div class="bar">
        {{qouteList.length}} / {{maxQouteCount}}
        <div class="completed" :style="{width:(qouteList.length / maxQouteCount)*100+'%'}"></div>
      </div>
    </QoutesProggressBar>
    <AddQoutes></AddQoutes>
    <QoutesList>
      <QoutesListItem
        v-for="(quoteitem,index) in qouteList"
        :key="index"
        @click.native="deleteQoute(index)"
      >
        <p style="white-space:pre" v-html="quoteitem"></p>
      </QoutesListItem>
    </QoutesList>
  </div>
</template>

<script>
import QoutesList from "@/components/Qoutes/QoutesList.vue";
import QoutesListItem from "@/components/Qoutes/QoutesListItem.vue";
import QoutesProggressBar from "@/components/Qoutes/QoutesProggressBar.vue";
import AddQoutes from "@/components/Qoutes/AddQoutes.vue";
import FooterMessage from "@/components/Qoutes/FooterMessage.vue";
import { EventBus } from "@/main";

export default {
  data() {
    return {
      qouteList: [],
      maxQouteCount: 10
    };
  },
  methods: {
    deleteQoute(index) {
      this.qouteList.splice(index, 1);
    }
  },
  components: {
    QoutesList: QoutesList,
    QoutesListItem: QoutesListItem,
    QoutesProggressBar: QoutesProggressBar,
    AddQoutes: AddQoutes,
    FooterMessage: FooterMessage
  },
  created() {
    EventBus.$on("AddQoute", newItem => {
      if (this.qouteList.length >= this.maxQouteCount) {
        alert(
          "Maksimum Sayıya Ulaştınız. Lütfen yeni eklemek için mevcutlardan birini siliniz."
        );
      } else {
        this.qouteList.push(newItem);
      }
    });
  }
};
</script>
