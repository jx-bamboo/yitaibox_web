<template>
  <div class="_doc _hideScrollbar _not_viewport">
    <div class="_title">用户隐私政策</div>
    <!-- <div class="_logo">
      <img :src="$cdn + '/mobile/doc_logo.png'" alt="" />
    </div> -->
    <div class="_content_text">
      <div class="_list" v-for="(item, index) in docList" :key="index">
        <div class="_tit" v-if="item.tit">{{ item.tit }}</div>
        <div class="_cont" v-if="item.desc">
          <div class="_block" v-for="(e, j) in item.desc" :key="j">
            <div class="_cont_t1" v-if="e.txt1" v-html="e.txt1"></div>
            <div class="_cont_t2" v-if="e.txt1_1" v-html="e.txt1_1"></div>
            <div class="_cont_t3" v-if="e.txt2" v-html="e.txt2"></div>
          </div>
        </div>
        <div class="_txt1" v-if="item.txt1" v-html="item.txt1"></div>
        <div class="_txt2" v-if="item.txt2" v-html="item.txt2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docList: [
        {
          tit: "感谢您信任并使用以钛箱客户端！",
          txt2: `以钛箱客户端（以下或称我们）非常注重保护用户个人信息及个人隐私，由于区块链技术的特性，您在使用我们的服务时，我们不会收集和使用您的任何相关信息。对此，我们依据最新的法律法规要求，制定了《以钛箱客户端用户隐私政策》（以下简称《隐私政策》），请务必仔细阅读。`,
        },
        {
          tit: "",
          txt2: `我们承诺将按业界成熟的技术安全标准和措施保护您的个人隐私和相关信息。如果您不同意本《隐私政策》的任何内容，您可以选择停止使用服务；当您使用或继续使用我们的服务，即意味着您已充分阅读、理解并接受本《隐私政策》的全部内容，同意我们按此不收集、不使用、不存储您的任何隐私相关信息。`,
          desc: [
            {
              txt1: `本《隐私政策》包括以下几个方面的问题：`,
              txt2: `一、我们可能收集的信息`,
            },
            {
              txt1: ``,
              txt2: `二、我们可能调用的设备权限`,
            },
            {
              txt1: ``,
              txt2: `三、我们如何使用和保护信息`,
            },
			{
			  txt1: ``,
			  txt2: `四、我们如何共享信息`,
			},
			{
			  txt1: ``,
			  txt2: `五、第三方服务`,
			},
            {
              txt1: ``,
              txt2: `六、未成年人使用条款`,
            },
            {
              txt1: ``,
              txt2: `七、修订和通知`,
            },
            {
              txt1: ``,
              txt2: `八、联系我们`,
            },
          ],
        },
        {
          tit: "一、我们可能收集的信息",
          desc: [
            {
              txt1: `1. 您向我们提供的信息`,
              txt2: `您在注册、登录帐号或使用我们的服务时不需要提供任何的信息。`,
            },
            {
              txt1: `2. 我们获取的您的信息`,
              txt1_1: `2.1 使用过程中产生的日志信息，包括浏览、点击、搜索等；`,
            },
            {
              txt1_1: `2.2 移动设备或软件信息：包括设备号、设备IP、系统版本等；`,
            },
            {
              txt1_1: `2.3 通过移动设备的定位功能，收集到的地理位置信息。`,
            },
          ],
        },

        {
          tit: null,
          desc: [
            {
              txt1: `3. 从第三方获得的信息`,
              txt1_1: `使用第三方账号（如：支付宝、微信）购买会员服务时，收集到的第三方账号的昵称、头像、支付唯一识别码等仅用于判断用户是否使用第三方支付（如：支付宝、微信）支付的信息。`,
            },
          ],
        },

        {
          tit: "二、我们可能调用的设备权限",
          desc: [
            {
              txt1: `我们可能会调用您的一些设备权限，以下是我们可能调用的设备权限及对应的使用目的说明，您随时可以选择关闭下列权限的授权，但可能会影响部分或全部功能。`,
              txt1_1: `1. 位置：为你提供记录精准的网络位置等功能；`,
            },
            {
              txt1_1: `2. 通知/推送：包括提醒、声音和图标标记；`,
            },

            {
              txt1_1: `3. 无线数据：访问获取无线局域网及蜂窝移动数据；`,
            },

            {
              txt1_1: `4. 相机：用于提供用户上传及时拍摄照片的功能；`,
            },

            {
              txt1_1: `5. 存储：用户下载自己加密后的文件等信息。`,
            },
          ],
        },

        {
          tit: "三、我们如何使用和保护信息",
          desc: [
            {
              txt1: `1. 我们如何使用信息`,
              txt1_1: `我们不主动收集用户的信息，我们将根据合法、正当、必要的原则，收集少量致力于维护用户权益的信息，这些信息将用于：`,
            },
            {
              txt1_1: `1.1 保障产品的正常运行，优化、改善各项功能和服务；`,
            },

            {
              txt1_1: `1.2满足用户个性化需求和互动体验；`,
            },

            {
              txt1_1: `1.3 保障用户和服务的使用安全。`,
            },
            {
              txt1: `2. 我们如何保护信息`,
              txt1_1: `我们会采用多项安全区块链技术加密防护措施，包括制度规范、安全技术来防止信息的丢失、损坏，未经授权的访问、使用、披露、修改等。`,
            },

            {
              txt1: `3. 除以下情形外，未征得您的同意，我们不会主动向第三方共享您的个人信息：`,
              txt1_1: `3.1 已取得您或您监护人的授权；`,
            },
            {
              txt1_1: `3.2 违反国家法律规定，政府部门、司法机关依照法定程序要求；`,
            },
            {
              txt1_1: `3.3 为避免您或他人生命、自由、身体或财产等遭遇不法侵害；`,
            },

            {
              txt1_1: `3.4 国家法律法规规定的其它所有情形。`,
            },
          ],
        },

        {
          tit: "四、我们如何共享信息",
          desc: [
            {
              txt1: `除非经过您的同意，我们不会向第三方共享、转让可识别的个人信息。特定前提下，我们将分享必要的个人信息与第三方，我们将要求第三方对您的个人信息采取保护措施并且严格遵守相关法律法规与监管要求。第三方如要改变个人信息的处理目的，将再次征求您的授权同意。`,
              txt1_1: `4.1 强制性共享：我们可能会根据法律法规规定，或按照法律法规、法律程序的要求或强制性的政府要求或司法裁定等，与第三方共享您的个人信息。`,
            }
          ],
        },
		
		{
		  tit: "五、第三方服务",
		  desc: [
		    {
		      txt1: `我们可能接入或链接至第三方提供的服务（包括网站或其他服务形式）。`,
		      txt1_1: `例如，为实现本《隐私政策》中声明的目的，我们可能会接入第三方SDK服务或其他类似的应用程序（如以嵌入代码、插件等形式），以提高更好的客户服务和用户体验。在使用第三方SDK服务时，我们不会收集用户的任何信息。`,
		    },
			{
			  txt1: '目前，我们接入的第三方服务商主要包括以下类型：',
			  txt1_1: `    . SDK名称：支付宝;
    . 公司名称：支付宝（中国）网络技术有限公司;
    . SDK 官网：https://open.alipay.com/;
    . 使用目的：用于实现支付宝支付服务;
    . 收集的个人信息的类型/字段：设备标识信息;`,
			},
      
			{
			  txt1: '第三方支付服务由相关的第三方负责运营。您使用第三方服务（包括您向该第三方提供的任何信息），需受第三方自己的服务条款及信息保护声明（而非本政策）约束，您需要仔细阅读其条款。本政策仅适用于我们所收集的个人信息，并不适用于任何第三方提供的服务或第三方的信息使用规则。如您发现这些第三方服务存在风险时，建议您终止相关操作以保护您的合法权益并及时于我们取得联系。'
			},
		  ],
		},

        {
          tit: "六、未成年人使用条款",
          desc: [
            {
              txt1: `
未成年人在使用服务前，应在父母或其他监护人指导下共同阅读并同意本《隐私政策》。`,
            },
            {
              txt1: `我们将根据国家相关法律法规的规定保护未成年人的个人信息，只会在法律允许、父母或其他监护人明确同意或保护未成年人所必要的情况下收集、使用、存储、共享或披露未成年人的个人信息。`,
            },
          ],
        },

        {
          tit: "七、修订和通知",
          desc: [
            {
              txt1: `为提供更好的服务，我们可能适时修订本《隐私政策》的条款并在显著位置提示。在该种情况下，若您继续使用我们的服务，即表示同意受经修订的政策约束。`,
            },
          ],
        },

        {
          tit: "八、联系我们",
          desc: [
            {
              txt1: `如您对本《隐私政策》或其他相关事宜有任何疑问、意见或建议，请浏览以钛箱官网（https://www.yitaibox.com）或发送邮件至support@dbchain.cloud`,
            },
            {
              txt1: `本协议解释权及修订权归深圳市库链科技有限公司所有，在法律允许的范围内，我们拥有解释和修改的权利。`,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang='scss'>
._doc._not_viewport {
  background: #000000;
  height: initial;
  // overflow-y: auto;
  ._title {
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 33px;
    padding: 32px 0 17px 0;
    white-space: pre-wrap;
    word-break: normal;
  }
  ._logo {
    width: 100%;
    height: 240px;
    img {
      height: 240px;
    }
  }
  ._content_text {
    ._list {
      padding: 0 14px;
      text-align: left;
      padding-bottom: 30px;
      white-space: pre-wrap;
      word-break: normal;
      ._tit {
        height: 30px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 30px;
        text-align: left;
        padding-bottom: 18px;
        padding-top: 5px;
        white-space: pre-wrap;
        word-break: normal;
      }
      ._txt2 {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
        white-space: pre-wrap;
        word-break: normal;
      }
      ._cont {
        ._block {
          padding-bottom: 10px;
          white-space: pre-wrap;
          word-break: normal;
        }
        ._cont_t1 {
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 22px;
          padding: 6px 0;
          white-space: pre-wrap;
          word-break: normal;
        }
        ._cont_t3,
        ._cont_t2 {
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 22px;
          white-space: pre-wrap;
          word-break: normal;
        }
      }
    }
  }
}
</style>