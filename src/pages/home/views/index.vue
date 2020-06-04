<template>
  <div class="container">
    <!-- <div class="share-img">
      <img :src="imgUrl" alt="分享图" />
    </div>-->
    <div class="creat-img" ref="box">
      <div style="width:200px">{{ msg }}</div>
      <div id="qrcode" class="qrcode"></div>
    </div>
  </div>
</template>

<script>
import { qrcanvas } from "qrcanvas";
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      imgUrl: "",
      msg: ""
    };
  },
  watch: {
    //监听到imgUrl有变化以后 说明新图片已经生成 隐藏DOM
    imgUrl() {
      this.$refs.box.style.display = "none";
    }
  },
  created() {
    let that = this;
    this.msg = "2019-12-12";
    that.$nextTick(() => {
      //生成二维码
      var canvas1 = qrcanvas({
        data: "22222222222222222",
        size: 200
      });
      document.getElementById("qrcode").innerHTML = "";
      document.getElementById("qrcode").appendChild(canvas1);
      //合成分享图
      html2canvas(that.$refs.box, { width: 200, height: 300 }).then(canvas => {
        that.imgUrl = URL.createObjectURL(
          that.base64ToBlob(canvas.toDataURL())
        );
        console.log(that.imgUrl);
      });
    });
  },

  methods: {
    //base64转blob
    base64ToBlob(code) {
      let parts = code.split(";base64,");
      let contentType = parts[0].split(":")[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    }
  }
};
</script>
