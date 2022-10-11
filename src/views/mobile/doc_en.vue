<template>
  <div class="_doc _hideScrollbar _not_viewport">
    <div class="_title">YTBox Member Service Agreement</div>
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
          tit: "Special Note",
          txt2: `This agreement is between Shenzhen KuLian Technology Co., Ltd. (hereinafter referred to as "KuLian Technology") and all entities (including but not limited to individuals, teams, etc.) (hereinafter referred to as "users") who use the service of YTBox The use of member services and valid contracts concluded with related services. In order to use the YTBox Member Service (referred to as this service), please carefully read, understand and abide by the "Titan Box Member Service Agreement" (referred to as this Agreement). This agreement is jointly concluded by you and the provider of the service agreement of the YTBox Membership, and has the effect of a contract. There are corresponding clauses related to exemption or limitation of liability (hereinafter referred to as "exemption clauses"), clauses restricting user rights (hereinafter referred to as "limitation clauses"), and clauses stipulating dispute resolution methods and jurisdiction. As mentioned above, these exemptions, restrictions and dispute resolution methods and jurisdiction clauses may be bolded, marked in color or other reasonable ways to remind you, and please read them carefully. Your confirmation of these terms may cause you to be in certain circumstances. For passiveness, inconvenience, and loss, please read the foregoing terms again before confirming your agreement to this agreement or before using the YTBox Member Service Agreement.`,
        },
        {
          tit: "Ⅰ、definition and description",
          desc: [
            {
              txt1: `1.1【YTBox Member and Account】`,
              txt2: `If you need to use and enjoy the YTBox membership service, you need to use the YTBox account that you have the legal right to use as a member account, and enjoy the membership service corresponding to the recharge limit after recharging (including accepting gifts). Become a member user of YTBox. Also referred to as "you", "user" or "member" under these terms. YTBox membership is a member service of the rights and interests content, please read the rights and interests content carefully to activate the corresponding service.`,
            },
            {
              txt1: `1.2【this service】`,
              txt2:`YTBox membership service, that is, members can enjoy exclusive membership rights and special services in the YTBox application, including but not limited to elliptic curve encryption (ECC), asymmetric encryption (RSA), distributed storage, non-tampering, digital Inheritance, etc., the specific content is subject to the description on the "Member Services" page of YTBox. The rights and service durations that different member packages can enjoy will vary.`            },
            {
              txt1: `1.3【Rules for members of the YTBox】`,
              txt2: `That is, the user rules, activity rules, usage rules, announcements, reminders, notices, etc. of the YTBox members issued and revised by the YTBox service provider from time to time.`,
            },
            {
              txt1: `1.4【Agreement Update】`,
              txt2: `kulian Technology can update the terms of service under this agreement (including changes, additions, and reductions of the corresponding terms and conditions). Once the terms of service are updated, kulian Technology will use system prompts, information pushes and the contact you left on our platform Ways to notify and remind you to pay attention. If you do not agree to the changed agreement, you can stop using the service. If you continue to use the services provided by kulian Technology, it is deemed that you have accepted all the modifications of this agreement.`            },
            {
              txt1: `1.5【This Agreement】`,
              txt2: `The content of this agreement also includes relevant agreements, business rules, etc. that may be continuously released by kulian Technology on the service of YTBox.`,
            },
          ],
        },
        {
          tit: "Ⅱ、 Account management and usage rules",
          desc: [
            {
              txt1: `2.1 【Account Management】`,
              txt2: `2.1.1 You should correctly use, keep and maintain your YTBox mnemonics. If there is any leakage, loss, theft, etc., and such behavior is not caused by the legal fault of kulian Technology, all losses will be borne by you. bear;`,
            },
            {
              txt1: `2.2 【Rules of Use】`,
              txt1_1: `2.2.1【Legal acquisition and use】`,
              txt2: `(1) The membership service of the YTBox is limited to your use within the YTBox platform. Any illegal means such as cracking, translation, transcription and other illegal means will separate the YTBox Yuesheng from the YTBox platform. This does not belong to this YTBox member services agreed in the terms. kulian Technology reserves the right to pursue the legal liabilities and claims of the infringer.`            },
            {
              txt1_1:`(2) Any member of YTBox (including but not limited to purchase, rent, borrow, share, transfer, etc.) obtained through theft, use of system vulnerabilities, through any non-Kulink official or authorized channels, malicious use or Any damage to the member services obtained through the activities of YTBox members will not be protected. kulian Technology reserves the right to cancel or not provide member services. All losses and responsibilities shall be borne by the perpetrators.`            },
            {
              txt1_1:`(3)When using the YTBox membership service and participating in related activities, it should also be carried out through the official announcement/authorization of the YTBox. The user illegally obtains the YTBox membership service (including and not (Limited to account, membership rights, membership service activation codes, etc.) or participating in activities to obtain benefits (including but not limited to obtaining physical/virtual gifts, membership rights, membership service activation codes, etc.), are not protected, and once found kulian Technology The right to immediately make restrictions on related services, etc., and all losses and responsibilities incurred shall be borne by the perpetrator himself.`            },
            {
              txt1_1: `(4)When you participate in member activities, you should follow the rules of the activity and proceed in a way that is legal and does not harm the organizer of the activity. Anyone who takes advantage of system loopholes, rule setting defects, system setting errors, abuse of membership status, etc., participates in the activity and obtains relevant benefits. It is protected, and kulian Technology has the right to take relevant measures to deal with it, and all the losses and responsibilities incurred shall be borne by the perpetrator.`            },
          ],
        },

        {
          tit: null,
          desc: [
            {
              txt1: `2.2.2 【Proprietary and non-commercial use】`,
              txt1_1: `(1) With YTBox membership service, kulian Technology will give you a personal, non-transferable and non-exclusive license under the premise that you abide by these terms and relevant laws and regulations. You can only use it for non-commercial purposes and only for private use.`            },
            {
              txt1_1: `(2) You understand and agree that you may not use the YTBox account that enjoys membership services to others in any way, including but not limited to not being transferred, rented, borrowed, shared, sold, etc. to others for including but not Limited to sharing, uploading, participating in activities, etc. Otherwise, any legal consequences and responsibilities arising therefrom shall be borne by you, and kulian Technology reserves the right to suspend or terminate the provision of services to you.`            },

            {
              txt1: `2.2.3 【Account Independent】`,
              txt1_1: `(1) If the same entity has multiple YTBox accounts and log in as YTBox members, each YTBox account will be recognized as an independent account•`            },

            {
              txt1_1: `(2) The data between each YTBox account cannot be transferred, migrated, transferred, gifted, sold, rented, or shared. Regardless of whether these accounts are owned by the same person, please pay attention to the distinction when logging in or participating in activities. Cause losses.`            },

            {
              txt1: `2.2.4 【Login Restrictions】`,
              txt1_1: `You understand and agree that after you activate this month's service, the same account can be used on multiple devices ("devices" include but not limited to handheld mobile terminal devices such as computers, mobile phones, tablets, etc., the same below), and The same account can be used on up to two devices at the same time.`            },
            {
              txt1: `2.2.5 【Account Retrieve】`,
              txt1_1: `If the mnemonic information you used when entering the YTBox is lost or forgotten, you will never be able to retrieve it if you cannot enter the YTBox.`            },
            {
              txt1: `2.2.6 【Operate with caution】`,
              txt1_1: `Use YTBox to provide you with online services such as data storage, management and inheritance. You fully own and control the data stored in your own blockchain space, and you can edit the stored data yourself. If you delete and empty the store yourself For the stored data, your online data will be deleted synchronously with the YTBox block data. The data will no longer be retained according to your instructions. You should be cautious about deleting and clearing data.`            },
          ],
        },

        {
          tit: "Ⅲ、Member service content",
          desc: [
            {
              txt1: `3.1 【Member Privileges】`,
              txt1_1: `3.1.1 After you subscribe to the membership service, you will enjoy the corresponding service experience based on your purchase record and related activities you participated in, and the specific content published on the relevant service page and actually provided shall prevail. .`            },
            {
              txt1_1: `3.1.2 All the rights and interests that you can enjoy after purchasing YTBox Member shall be subject to the member rights and interests announced on the YTBox official website. kulian Technology reserves the right to change all or the rights based on its own business development needs. For some member rights, regarding the aforementioned rights adjustment, YTBox will remind you of the updated display or notification on the corresponding service page. You can also check the latest membership rights and benefits through the YTBox official website or mobile terminal. At the same time, we also encourage you to check the content of this agreement regularly to better protect your rights.`            },

            {
              txt1: `3.2 【Virtual Product】`,
              txt1_1:`Based on the nature and characteristics of the virtual product, the virtual product you have obtained cannot be returned, exchanged, or exchanged for cash, nor can it be used in commercial areas such as trading, replacement, mortgage, etc. In order to ensure your user rights and interests, please purchase the products of YTBox membership through official channels. All virtual products and derivative services obtained through unofficial announcement channels are not protected. kulian Technology reserves the right to suspend or terminate the service to you ; For the loss caused by this, YTBox will not bear the related responsibility.`            },

            {
              txt1: `3.3 【Equipment and system differences】`,
              txt1_1: `After you activate this service through the channels designated by kulian Technology, the actual service you can use may be different due to differences in the software version, equipment, operating system, etc. you use, as well as other third-party reasons, which may bring you For the inconvenience, you understand that you will not be held accountable or exempt from kulian Technology related responsibilities.`            },

            {
              txt1: `3.4 【About charges】`,
              txt1_1: `This service is a fee-based service provided by KuLian Technology. You must pay the corresponding fee in accordance with the fee standard of this service before you can use this service. In addition, you can also enjoy and use this service by accepting gifts from friends and other methods recognized by KuLian Technology. KuLian Technology may revise and change the relevant rights and interests rules, charging standards, methods, etc. of this service according to the overall plan of this service. For the foregoing modifications and changes, KuLian Technology will update and display on the corresponding service page. KuLian Technology will give different preferential treatments to members who recharge and renew at different stages according to the actual situation. The specific preferential policies are subject to the information published by KuLian Technology on the relevant service pages. At the same time, we also encourage you to check the content of this agreement regularly to better protect your rights. You hereby understand and agree that due to different activities or different membership packages, YTBox members will enjoy different value-added services or tariffs.`            },
            {
              txt1: `3.5 【Payment】`,
              txt1_1: `3.5.1 You should pay in accordance with the agreement through the methods designated by kulian Technology, including but not limited to Alipay, WeChat Pay, etc., or the methods designated by kulian Technology in the future. After the payment is completed, no jewelry or refunds are allowed. Unless you are repeatedly deducted from the purchase due to technical reasons of the YTBox product, you can file a refund appeal. After the verification of kulian Technology, the refund can be processed for you, but you need to provide corresponding information and cooperate with kulian Technology in processing.`            },
            {
              txt1_1: `3.5.2 You may not activate this service for yourself or others in any of the following ways:`,
            },
            {
              txt2: `(1) Open this service for yourself or others for non-personal use purposes such as profit and business;`,
            },
            {
              txt2: `(2) Open this service for yourself or others through any program or software method such as any robot software, spider software, crawler software, or screen-swiping software;`,
            },
            {
              txt2: `(3) Open this service for yourself or others through any improper means or in a way that violates the principle of good faith;`,
            },
            {
              txt2: `(4) Activate this service for yourself or others through a method not specified by kulian Technology;`,
            },
            {
              txt2: `(5) Activate this service for yourself or others by infringing on the lawful rights and interests of kulian Technology or others;`,
            },
            {
              txt2: `(6) Open this service for yourself or others through other methods that violate relevant laws, administrative regulations, national policies, etc.;`,
            },

            {
              txt1_1: `3.5.3  You understand and acknowledge that if you use a third-party payment tool to pay or recharge in our platform account, any commercial risks that may arise (including but not limited to criminals using your account or bank card and other valuable cards to violate the law Event, the third party recharges and then refunds on behalf of your membership rights can not be realized; use third-party black production channels to recharge on behalf of, or through third-party informal channels to purchase YTBox membership rights far below the market value, etc.), the Such risks may cause you corresponding economic losses. We shall assume corresponding responsibilities under the conditions and scope clearly stipulated by the law, provided that we fully fulfill our obligations under this agreement and comply with the provisions of the law.`,
            },

            {
              txt1_1: `3.6 【Term of Service】`,
            },
            {
              txt1_1: `3.6.1 Unless otherwise stipulated in this agreement, the term of this service is subject to the time you choose and pay the corresponding fee. It will take effect after you choose and purchase the service, until the boat expires or you terminate the service/cancel When the membership is terminated, you can also log in to the YTBox Member Center or the corresponding page of this service to inquire. If you want to enjoy the continuous purchase of membership services and automatic deduction of fees, you can apply according to the wrongdoing guidelines;`,
            },
            {
              txt1_1: `Please understand that due to the peculiarities of Internet services, to provide you with high-quality services, the YTBox must be repaired, adjusted, and upgraded from time to time, and in the event of hacker attacks, computer virus intrusion, regulatory agency policy notifications, etc. After a force majeure event occurs, the YTBox must resolve the fault and deal with related infringement matters. Therefore, you accept that this service period includes the reasonable time required for the YTBox to resolve the fault, node upgrades, and third-party infringement processing. The time required for the above situation will not be compensated separately.`,
            },
            
          ],
        },

        {
          tit: "Ⅳ、Liability for breach of contract",
          desc: [
            {
              txt1: `4.1 When you use this service, you must not commit the following breaches of contract:`,
              txt1_1: `4.1.1 Violation of this clause;`,
            },
            {
              txt1_1: `4.1.2 Violation of laws, regulations, rules, regulations and any legally effective norms and regulations;`,
            },

            {
              txt1_1: `4.1.3 Destroy and affect the provision of this service by kulian Technology to any third party;`,
            },

            {
              txt1_1: `4.1.4 Conduct acts that endanger the security of computer networks;`,
            },
            {
              txt1_1: `4.1.5 Causes adverse effects on the services and activities of this clause provided by kulian Technology and related third parties (including authorized parties and partners), infringes and or associates the legitimate interests of third-party kulian Technology and or other users;`,
            },

            {
              txt1_1: `4.1.6 The lawful rights and interests of any third party have been violated by the competent authority;`,
            },
            {
              txt1_1: `4.1.7 Use of this service to obtain illegal benefits, including but not limited to making unfair profits through resale, transfer, sub-authorization, etc.;`,
            },
            {
              txt1_1: `4.1.8 Other acts that infringe upon the legitimate interests of kulian Technology;`,
            },

            {
              txt1: `4.2 【Treatment of breach of contract】`,
              txt1_1: `You confirm and agree that if kulian Technology discovers or receives reports from others that you have violated this agreement, kulian Technology has the right to make independent judgments in accordance with the law and take one or more of the following measures:`            },
            {
               txt1_1: `<span class=' '>(1) Delete, block or disconnect related information immediately according to the corresponding rules;</span>`,
            },
            {
              txt1_1: `<span class=' '>(2) Take measures including but not limited to suspending or terminating part or all of this service;</span>`,
            },
            {
              txt1_1: `<span class=' '>(3) Take measures to deduct the duration of member rights and interests within the time when the breach of contract occurred;</span>`,
            },
            {
              txt1_1: `<span class=' '>(4) Take measures to restrict users' rights and interests such as uploading, downloading, playing, sharing, and storing;</span>`,
            },
            {
              txt1_1: `<span class=' '>(5) kulian Technology does not need to refund any fees to you. Unused service fees belong to kulian as liquidated damages. The loss of your related membership rights and interests shall be borne by you. kulian Technology is clearly stipulated by the law. Take the corresponding responsibilities.</span>`,
            },

            {
              txt1: `4.3 【Liability for Compensation】`,
              txt1_1: `<span class=' '>If your actions cause kulian Technology and/or its affiliates to suffer losses (including your own direct economic loss, loss of goodwill, and indirect economic losses such as compensation, settlement, legal fees, litigation fees, etc.) Compensation for all the above-mentioned losses of kulian Technology and its affiliates.</span>`,
            },
            {
              txt1_1: `<span class=' '>If your behavior causes kulian Technology and its affiliates to suffer the rights of a third party, kulian Technology and its affiliates can recover all losses from you after assuming financial obligations to the third party.</span>`,
            },
          ],
        },

        {
          tit: "Ⅴ、Service change, suspension and termination",
          desc: [
            {
              txt1: `5.1 The suspension or termination of this service includes the following situations:`,
              txt1_1: `5.1.1 The user voluntarily suspends the cancellation, including but not limited to the failure to renew the membership due to expiration;`,
            },
            {
              txt1_1: `5.1.2 kulian Technology voluntarily suspends or terminates the service due to user breach of contract;`,
            },

            {
              txt1_1: `5.1.3 kulian Technology suspends or terminates the service due to the requirements of the state or relevant departments or when a force majeure event occurs;`,
            },

            {
              txt1_1: `5.1.4 Other services that should or need to be suspended or terminated in accordance with laws and regulations or the adjustment of kulian technology business;`,
            },
            {
              txt1: `<span class=''>5.2 After suspending or terminating the service, YTO Box will use its best efforts to notify the user in a reasonable manner. When you find that you cannot log in or enjoy the service, you can consult our customer service.</span>`,
            },

            {
              txt1: `5.3 Processing after suspension or termination:`,
              txt1_1: `<span class=''>5.3.1 Except for the responsibilities stipulated by law, kulian Technology shall not be liable to the user or any third party for the suspension or termination of this service;</span>`,
            },
            {
              txt1_1: `<span class=''>5.3.2 Except as provided by law or otherwise stipulated in this agreement, the fees collected will not be refunded;；</span>`,
            },
            {
              txt1: `<span class=''>5.4  If you change the service content, service method and the content of this agreement by YTBox in accordance with the agreement, if the member does not agree with the change of YTBox, he has the right to choose to cancel and stop using all or part of the corresponding services already obtained; if the member If you continue to use the above-mentioned services provided by YTBox, it is deemed that the member has accepted the above adjustments of YTBox.</span>`,
            },
            {
              txt1: `<span class=''>5.5 If the member does not agree to the modification of the terms, he can take the initiative to terminate the membership service with YTBox, but the YTBox will not refund all paid fees since the member service is activated. If the member continues to enjoy the membership service, the member is deemed to have been Accept the modification of the terms.</span>`,
            },

            // {
            //   txt1_1: `<span class=' '></span>`,
            // },
          ],
        },

        {
          tit: "Ⅵ、Disclaimer",
          desc: [
            {
              txt1: `<span class=''>6.1 You understand and agree that the content uploaded, published or transmitted by users on the YTBox platform is the user’s personal behavior. kulian Technology shall not be responsible for the accuracy, authenticity, availability, security, and integrity of such information and content. And the legitimacy assumes the responsibility, you hereby agree to exempt from additional responsibilities related to kulian Technology.</span>`,
            },
            {
              txt1: `<span class=''>6.2 When you use, share, download and other related information and content (hereinafter referred to as "use behavior"), you should make independent judgments and use them legally. Any damage to yourself and third parties caused by your use behavior, kulian Technology does not assume any responsibility.</span>`,
            },
            {
              txt1: `<span class=''>6.3 If you have lost or decreased your account, account property, etc. due to non-Kokulian technology reasons such as communication line failures, network or computer failures, system instability, force majeure (such as all node servers down), etc. of the telecommunications and Netcom departments, you have no The right requires kulian Technology to bear the responsibility of tasting each other.</span>`,
            },
            {
              txt1: `<span class=''>6.4  If you suffer any personal or financial loss, damage or injury while using the services provided by YTBox, kulian Technology shall not be liable unless expressly provided by law. As you inform others of your personal mnemonic phrase or share the right to use with others, kulian Technology will not bear any responsibility for any leakage of personal information caused by this.</span>`,
            },
          ],
        },

        {
          tit: "Ⅶ、notification and delivery",
          desc: [
            {
              txt1: `All notifications from kulian Technology to users under this agreement are made only through the official website of YTBox or Shenzhen kulian Technology's official account, and such notifications are deemed to have been delivered to users on the date of dispatch.`,
            },
          ],
        },

        {
          tit: "Ⅷ、Application and Jurisdiction of Law",
          desc: [
            {
              txt1: `8.1 The conclusion, implementation and interpretation of this agreement and dispute resolution shall be governed by the laws of the People’s Republic of China and the host country.`,
            },
            {
              txt1: `<span class=''>8.2 If there is any dispute between the two parties regarding the content or implementation of this agreement, both parties shall try their best to resolve it through friendly negotiation; if the negotiation fails, either party may bring a lawsuit to the people's court with jurisdiction in the place where kulian Technology is located.</span>`,
            },
            {
              txt1: `8.3 kulian Technology's failure to exercise any rights or provisions of the City Bank's property management agreement does not constitute a waiver of the foregoing rights or rights.`,
            },
            {
              txt1: `8.4 If any clause in this agreement is completely or partially invalid or unenforceable for whatever reason, the remaining clauses in this agreement shall still be valid and binding.`,
            },

            {
              txt1: `<span class=' '>8.5 Within the scope permitted by laws and regulations, kulian Technology has the right to interpret this agreement.</span>`,
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
    padding: 32px 0 17px 0;white-space:pre-wrap;    word-break: normal;
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
      padding-bottom: 30px;white-space:pre-wrap;    word-break: normal;
      ._tit {
        height: 30px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 30px;
        text-align: left;
        padding-bottom: 18px;
        padding-top: 5px;white-space:pre-wrap;    word-break: normal;
      }
      ._txt2 {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;white-space:pre-wrap;    word-break: normal;
      }
      ._cont {
        ._block {
          padding-bottom: 10px;white-space:pre-wrap;    word-break: normal;
        }
        ._cont_t1 {
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 22px;
          padding: 6px 0;white-space:pre-wrap;    word-break: normal;
        }
        ._cont_t3,
        ._cont_t2 {
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 22px;white-space:pre-wrap;    word-break: normal;
        }
      }
    }
  }
  
}
</style>