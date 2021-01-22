import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-delivery-results001',
  templateUrl: './data-delivery-results001.component.html',
  styleUrls: ['./data-delivery-results001.component.css']
})
export class DataDeliveryResults001Component implements OnInit {

  showhead: any;
  breadcrumb: any = [
    {
      label: "ผลการนำส่งกองทุน",
      link: "#",
    },
  ];

  data: any[] = [
    {
      mode: "สำนักงานสรรพสามิตภาคที่ 1", total: 839870.87, data: [{
        "determination": "300600017 ",
        "pp": "นนทบุรี",
        "amountWithdrawn": " 43.65 "
      },
      {
        "determination": "300600018 ",
        "pp": "ส.นนทบุรี",
        "amountWithdrawn": " 12,139.43 "
      },
      {
        "determination": "300600019 ",
        "pp": "ส.บางใหญ่",
        "amountWithdrawn": " 19,161.22 "
      },
      {
        "determination": "300600020 ",
        "pp": "ปทุมธานี 1",
        "amountWithdrawn": " 3,237.88 "
      },
      {
        "determination": "300600021 ",
        "pp": "ปทุมธานี 2",
        "amountWithdrawn": " 79,488.24 "

      },
      {
        "determination": "300600023 ",
        "pp": "ส.ลพบุรี",
        "amountWithdrawn": " 2,077.54 "
      },
      {
        "determination": "300600024 ",
        "pp": "ส.โคกสำโรง",
        "amountWithdrawn": " 100.59 "
      },
      {
        "determination": "300600028 ",
        "pp": "ส.แก่งคอย",
        "amountWithdrawn": " 104.62 "
      },
      {
        "determination": "300600030 ",
        "pp": "สิงห์บุรี",
        "amountWithdrawn": " 3,916.77 "
      },
      {
        "determination": "300600031 ",
        "pp": "อ่างทอง",
        "amountWithdrawn": " 937.45 "
      },
      {
        "determination": "300600032 ",
        "pp": "ชัยนาท",
        "amountWithdrawn": " 715,074.52 "
      },
      {
        "determination": "300600035 ",
        "pp": "อยุธยา 1",
        "amountWithdrawn": " 44.32 "
      },
      {
        "determination": "300600036 ",
        "pp": "อยุธยา 2",
        "amountWithdrawn": " 3,544.64 "
      },]
    },
    {
      mode: "สำนักงานสรรพสามิตภาคที่ 2", total: 7658207.11
      , data: [{
        "determination": "300600038 ",
        "pp": "ชลบุรี 1",
        "amountWithdrawn": " 469.10 "
      },
      {
        "determination": "300600039 ",
        "pp": "ชลบุรี 2",
        "amountWithdrawn": " 25,813.32 "
      },
      {
        "determination": "300600041 ",
        "pp": "ส.จันทบุรี",
        "amountWithdrawn": " 13,801.87 "
      },
      {
        "determination": "300600042 ",
        "pp": "ส.นายายอาม",
        "amountWithdrawn": " 4,538.46 "
      },
      {
        "determination": "300600043 ",
        "pp": "ส.โป่งน้ำฯ",
        "amountWithdrawn": " 3,344.57 "
      },
      {
        "determination": "300600045 ",
        "pp": "ส.ฉะเชิงฯ",
        "amountWithdrawn": " 450,221.35 "
      },
      {
        "determination": "300600046 ",
        "pp": "ส.พนมสารฯ",
        "amountWithdrawn": " 1,625.91 "
      },
      {
        "determination": "300600048 ",
        "pp": "ส.ตราด",
        "amountWithdrawn": " 6,306.28 "
      },
      {
        "determination": "300600049 ",
        "pp": "ส.เขาสมิง",
        "amountWithdrawn": " 915.04 "
      },
      {
        "determination": "300600051 ",
        "pp": "ส.ปราจีนฯ",
        "amountWithdrawn": " 6,736.36 "
      },
      {
        "determination": "300600052 ",
        "pp": "ส.กบินทร์ฯ",
        "amountWithdrawn": " 59.79 "
      },
      {
        "determination": "300600053 ",
        "pp": "ระยอง 1",
        "amountWithdrawn": " 418.82 "
      },
      {
        "determination": "300600054 ",
        "pp": "ระยอง 2",
        "amountWithdrawn": " 1,124.92 "
      },
      {
        "determination": "300600055 ",
        "pp": "สมุทรปราฯ1",
        "amountWithdrawn": " 118.20 "
      },
      {
        "determination": "300600056 ",
        "pp": "สมุทรปราฯ2",
        "amountWithdrawn": " 7,142,417.56 "
      },
      {
        "determination": "300600058 ",
        "pp": "ส.สระแก้ว",
        "amountWithdrawn": " 295.56 "
      },]
    },
    {
      mode: "สำนักงานสรรพสามิตภาคที่ 3", total: 402269.22, data: [{
        "determination": "300600063 ",
        "pp": "ส.นครราชฯ",
        "amountWithdrawn": " 237,677.93 "
      },
      {
        "determination": "300600064 ",
        "pp": "ส.โชคชัย",
        "amountWithdrawn": " 67,331.53 "
      },
      {
        "determination": "300600065 ",
        "pp": "ส.โนนสูง",
        "amountWithdrawn": " 10,895.19 "
      },
      {
        "determination": "300600068 ",
        "pp": "ส.สีคิ้ว",
        "amountWithdrawn": " 53,926.92 "
      },
      {
        "determination": "300600070 ",
        "pp": "ส.ชัยภูมิ",
        "amountWithdrawn": " 1,874.93 "
      },
      {
        "determination": "300600072 ",
        "pp": "ส.ภูเขียว",
        "amountWithdrawn": " 20,614.64 "
      },
      {
        "determination": "300600073 ",
        "pp": "บุรีรัมย์",
        "amountWithdrawn": " 27.86 "
      },
      {
        "determination": "300600074 ",
        "pp": "ส.บุรีรัมย์",
        "amountWithdrawn": " 2,083.27 "
      },
      {
        "determination": "300600077 ",
        "pp": "ส.สตึก",
        "amountWithdrawn": " 211.86 "
      },
      {
        "determination": "300600079 ",
        "pp": "ส.สุรินทร์",
        "amountWithdrawn": " 2,420.85 "
      },
      {
        "determination": "300600080 ",
        "pp": "ส.ท่าตูม",
        "amountWithdrawn": " 862.10 "
      },
      {
        "determination": "300600083 ",
        "pp": "ส.ร้อยเอ็ด",
        "amountWithdrawn": " 1,746.87 "
      },
      {
        "determination": "300600084 ",
        "pp": "ส.โพนทอง",
        "amountWithdrawn": " 44.32 "
      },
      {
        "determination": "300600088 ",
        "pp": "ส.ศรีสะเกษ",
        "amountWithdrawn": " 1,687.26 "
      },
      {
        "determination": "300600090 ",
        "pp": "ส.ขุขันธ์",
        "amountWithdrawn": " 66.05 "
      },
      {
        "determination": "300600091 ",
        "pp": "ส.อุทุมพรฯ",
        "amountWithdrawn": " 53.92 "
      },
      {
        "determination": "300600093 ",
        "pp": "ส.อำนาจฯ",
        "amountWithdrawn": " 57.71 "
      },
      {
        "determination": "300600097 ",
        "pp": "ส.เขมราฐ",
        "amountWithdrawn": " 325.09 "
      },
      {
        "determination": "300600098 ",
        "pp": "ส.เดชอุดม",
        "amountWithdrawn": " 236.40 "
      },
      {
        "determination": "300600101 ",
        "pp": "ส.วารินฯ",
        "amountWithdrawn": " 124.52 "
      },

      ]
    },

    {
      mode: "สำนักงานสรรพสามิตภาคที่ 4", total: 27560.45, data: [
        {
          "determination": "300600108 ",
          "pp": "ส.กาฬสินธุ์",
          "amountWithdrawn": " 977.34 "
        },
        {
          "determination": "300600112 ",
          "pp": "ส.ขอนแก่น",
          "amountWithdrawn": " 1,232.43 "
        },
        {
          "determination": "300600113 ",
          "pp": "ส.ชุมแพ",
          "amountWithdrawn": " 107.27 "
        },
        {
          "determination": "300600114 ",
          "pp": "ส.น้ำพอง",
          "amountWithdrawn": " 344.27 "
        },
        {
          "determination": "300600116 ",
          "pp": "ส.พล",
          "amountWithdrawn": " 30.05 "
        },
        {
          "determination": "300600122 ",
          "pp": "ส.วาปีฯ",
          "amountWithdrawn": " 930.82 "
        },
        {
          "determination": "300600123 ",
          "pp": "หนองคาย",
          "amountWithdrawn": " 232.57 "
        },
        {
          "determination": "300600124 ",
          "pp": "ส.หนองคาย",
          "amountWithdrawn": " 7,998.58 "
        },
        {
          "determination": "300600127 ",
          "pp": "ส.ศรีเชียงฯ",
          "amountWithdrawn": " 5,739.28 "
        },
        {
          "determination": "300600132 ",
          "pp": "ส.นครพนม",
          "amountWithdrawn": " 492.48 "
        },
        {
          "determination": "300600133 ",
          "pp": "ส.ธาตุพนม",
          "amountWithdrawn": " 5,367.65 "
        },
        {
          "determination": "300600134 ",
          "pp": "ส.ศรีสงฯ",
          "amountWithdrawn": " 295.50 "
        },
        {
          "determination": "300600136 ",
          "pp": "ส.สกลนคร",
          "amountWithdrawn": " 2,267.47 "
        },
        {
          "determination": "300600138 ",
          "pp": "ส.สว่างฯ",
          "amountWithdrawn": " 228.92 "
        },
        {
          "determination": "300600141 ",
          "pp": "ส.ด่านซ้าย",
          "amountWithdrawn": " 104.74 "
        },
        {
          "determination": "300600142 ",
          "pp": "ส.วังสะพุง",
          "amountWithdrawn": " 73.87 "
        },
        {
          "determination": "300600144 ",
          "pp": "ส.อุดรธานี",
          "amountWithdrawn": " 183.84 "
        },
        {
          "determination": "300600145 ",
          "pp": "ส.กุมภวาปี",
          "amountWithdrawn": " 103.79 "
        },
        {
          "determination": "300600300 ",
          "pp": "ส.เซกา",
          "amountWithdrawn": " 849.58 "
        },
      ]
    },
    {
      mode: "สำนักงานสรรพสามิตภาคที่ 5", total: 865982.29, data: [{
        "determination": "300600150 ",
        "pp": "ส.เชียงใหม่",
        "amountWithdrawn": " 3,297.44 "
      },
      {
        "determination": "300600151 ",
        "pp": "ส.เชียงดาว",
        "amountWithdrawn": " 3,591.35 "
      },
      {
        "determination": "300600152 ",
        "pp": "ส.สันทราย",
        "amountWithdrawn": " 2,997.17 "
      },
      {
        "determination": "300600153 ",
        "pp": "ส.สันป่าตอง",
        "amountWithdrawn": " 15,019.72 "
      },
      {
        "determination": "300600154 ",
        "pp": "ส.ฮอด",
        "amountWithdrawn": " 4,199.58 "
      },
      {
        "determination": "300600155 ",
        "pp": "ส.ฝาง",
        "amountWithdrawn": " 4,412.00 "
      },
      {
        "determination": "300600157 ",
        "pp": "ส.เชียงราย",
        "amountWithdrawn": " 10,905.51 "
      },
      {
        "determination": "300600158 ",
        "pp": "ส.เทิง",
        "amountWithdrawn": " 10,101.09 "
      },
      {
        "determination": "300600159 ",
        "pp": "ส.แม่สาย",
        "amountWithdrawn": " 11,161.86 "
      },
      {
        "determination": "300600160 ",
        "pp": "ส.เวียงป่า",
        "amountWithdrawn": " 14,772.98 "
      },
      {
        "determination": "300600162 ",
        "pp": "ส.น่าน",
        "amountWithdrawn": " 7,924.46 "
      },
      {
        "determination": "300600163 ",
        "pp": "ส.ปัว",
        "amountWithdrawn": " 10,590.45 "
      },
      {
        "determination": "300600164 ",
        "pp": "ส.เวียงสา",
        "amountWithdrawn": " 7,439.05 "
      },
      {
        "determination": "300600166 ",
        "pp": "ส.พะเยา",
        "amountWithdrawn": " 8,687.78 "
      },
      {
        "determination": "300600167 ",
        "pp": "ส.ปง",
        "amountWithdrawn": " 10,006.19 "
      },
      {
        "determination": "300600169 ",
        "pp": "ส.แพร่",
        "amountWithdrawn": " 587,768.19 "
      },
      {
        "determination": "300600170 ",
        "pp": "ส.เด่นชัย",
        "amountWithdrawn": " 16,382.17 "
      },
      {
        "determination": "300600172 ",
        "pp": "ส.แม่ฮ่องฯ",
        "amountWithdrawn": " 19,383.79 "
      },
      {
        "determination": "300600173 ",
        "pp": "ส.แม่สะฯ",
        "amountWithdrawn": " 1,868.76 "
      },
      {
        "determination": "300600175 ",
        "pp": "ส.ลำปาง",
        "amountWithdrawn": " 21,551.24 "
      },
      {
        "determination": "300600176 ",
        "pp": "ส.แจ้ห่ม",
        "amountWithdrawn": " 39,424.10 "
      },
      {
        "determination": "300600177 ",
        "pp": "ส.เถิน",
        "amountWithdrawn": " 2,582.19 "
      },
      {
        "determination": "300600179 ",
        "pp": "ส.ลำพูน",
        "amountWithdrawn": " 5,062.10 "
      },
      {
        "determination": "300600180 ",
        "pp": "ส.บ้านโฮ่ง",
        "amountWithdrawn": " 23,079.97 "
      },
      {
        "determination": "300600181 ",
        "pp": "อุตรดิตถ์",
        "amountWithdrawn": " 6,258.83 "
      },
      {
        "determination": "300600182 ",
        "pp": "ส.อุตรดิตถ์",
        "amountWithdrawn": " 11,100.59 "
      },
      {
        "determination": "300600183 ",
        "pp": "ส.น้ำปาด",
        "amountWithdrawn": " 6,413.73 "
      },]
    },
    {
      mode: "สำนักงานสรรพสามิตภาคที่ 6", total: 155582.27
      , data: [{
        "determination": "300600186 ",
        "pp": "ส.พิษณุโลก",
        "amountWithdrawn": " 308.53 "
      },
      {
        "determination": "300600187 ",
        "pp": "ส.วังทอง",
        "amountWithdrawn": " 3,407.62 "
      },
      {
        "determination": "300600188 ",
        "pp": "ส.วัดโบสถ์",
        "amountWithdrawn": " 1,851.53 "
      },
      {
        "determination": "300600190 ",
        "pp": "ส.สุโขทัย",
        "amountWithdrawn": " 12,859.01 "
      },
      {
        "determination": "300600191 ",
        "pp": "ส.ศรีสำโรง",
        "amountWithdrawn": " 2,591.16 "
      },
      {
        "determination": "300600192 ",
        "pp": "ส.สวรรคโลก",
        "amountWithdrawn": " 1,159.60 "
      },
      {
        "determination": "300600194 ",
        "pp": "ส.ตาก",
        "amountWithdrawn": " 2,854.21 "
      },
      {
        "determination": "300600195 ",
        "pp": "ส.แม่สอด",
        "amountWithdrawn": " 60,724.40 "
      },
      {
        "determination": "300600197 ",
        "pp": "ส.พิจิตร",
        "amountWithdrawn": " 72.40 "
      },
      {
        "determination": "300600198 ",
        "pp": "ส.บางมูลฯ",
        "amountWithdrawn": " 22.16 "
      },
      {
        "determination": "300600200 ",
        "pp": "ส.เพชรบูรณ์",
        "amountWithdrawn": " 2,714.44 "
      },
      {
        "determination": "300600201 ",
        "pp": "ส.หนองไผ่",
        "amountWithdrawn": " 738.71 "
      },
      {
        "determination": "300600202 ",
        "pp": "ส.หล่มสัก",
        "amountWithdrawn": " 49,318.41 "
      },
      {
        "determination": "300600204 ",
        "pp": "ส.อุทัยฯ",
        "amountWithdrawn": " 1,206.49 "
      },
      {
        "determination": "300600205 ",
        "pp": "ส.บ้านไร่",
        "amountWithdrawn": " 13,882.77 "
      },
      {
        "determination": "300600208 ",
        "pp": "ส.ตาคลี",
        "amountWithdrawn": " 253.74 "
      },
      {
        "determination": "300600209 ",
        "pp": "ส.ท่าตะโก",
        "amountWithdrawn": " 832.59 "
      },
      {
        "determination": "300600212 ",
        "pp": "ส.กำแพงฯ",
        "amountWithdrawn": " 778.29 "
      },
      {
        "determination": "300600213 ",
        "pp": "ส.คลองขลุง",
        "amountWithdrawn": " 6.21 "
      },]
    }, {
      mode: "สำนักงานสรรพสามิตภาคที่ 7", total: 6389186.99
      , data: [{
        "determination": "300600215 ",
        "pp": "นครปฐม 1",
        "amountWithdrawn": " 22,097.76 "
      },
      {
        "determination": "300600216 ",
        "pp": "นครปฐม 2",
        "amountWithdrawn": " 4,529,505.25 "
      },
      {
        "determination": "300600218 ",
        "pp": "ส.ราชบุรี",
        "amountWithdrawn": " 24,694.22 "
      },
      {
        "determination": "300600219 ",
        "pp": "ส.จอมบึง",
        "amountWithdrawn": " 40,424.40 "
      },
      {
        "determination": "300600220 ",
        "pp": "ส.บ้านโป่ง",
        "amountWithdrawn": " 3,477.28 "
      },
      {
        "determination": "300600221 ",
        "pp": "กาญจนบุรี",
        "amountWithdrawn": " 107,313.41 "
      },
      {
        "determination": "300600223 ",
        "pp": "ส.ท่าม่วง",
        "amountWithdrawn": " 36,069.64 "
      },
      {
        "determination": "300600225 ",
        "pp": "ส.สังขละฯ",
        "amountWithdrawn": " 1,479.41 "
      },
      {
        "determination": "300600227 ",
        "pp": "ส.ประจวบฯ",
        "amountWithdrawn": " 10,716.68 "
      },
      {
        "determination": "300600229 ",
        "pp": "ส.หัวหิน",
        "amountWithdrawn": " 1,610.42 "
      },
      {
        "determination": "300600231 ",
        "pp": "ส.เพชรบุรี",
        "amountWithdrawn": " 110.46 "
      },
      {
        "determination": "300600232 ",
        "pp": "ส.ชะอำ",
        "amountWithdrawn": " 2,666.01 "
      },
      {
        "determination": "300600233 ",
        "pp": "สมุทรสาคร",
        "amountWithdrawn": " 1,607,115.98 "
      },
      {
        "determination": "300600236 ",
        "pp": "ส.สุพรรณฯ",
        "amountWithdrawn": " 1,057.96 "
      },
      {
        "determination": "300600237 ",
        "pp": "ส.เดิมบางฯ",
        "amountWithdrawn": " 848.11 "
      },]
    }

    , {
      mode: "สำนักงานสรรพสามิตภาคที่ 8", total: 24869.82
      , data: [

        {
          "determination": "300600239 ",
          "pp": "สุราษฎร์ฯ",
          "amountWithdrawn": " 63.28 "
        },
        {
          "determination": "300600240 ",
          "pp": "ส.สุราษฎรฯ",
          "amountWithdrawn": " 544.17 "
        },
        {
          "determination": "300600241 ",
          "pp": "ส.พุนพิน",
          "amountWithdrawn": " 713.27 "
        },
        {
          "determination": "300600242 ",
          "pp": "ส.เวียงสระ",
          "amountWithdrawn": " 371.76 "
        },
        {
          "determination": "300600243 ",
          "pp": "ส.เกาะสมุย",
          "amountWithdrawn": " 10.35 "
        },
        {
          "determination": "300600244 ",
          "pp": "ภูเก็ต",
          "amountWithdrawn": " 717.69 "
        },
        {
          "determination": "300600246 ",
          "pp": "ส.นครศรีฯ",
          "amountWithdrawn": " 2,055.04 "
        },
        {
          "determination": "300600247 ",
          "pp": "ส.ท่าศาลา",
          "amountWithdrawn": " 8,457.50 "
        },
        {
          "determination": "300600248 ",
          "pp": "ส.ปากพนัง",
          "amountWithdrawn": " 5,993.32 "
        },
        {
          "determination": "300600249 ",
          "pp": "ส.ทุ่งสง",
          "amountWithdrawn": " 2,074.56 "
        },
        {
          "determination": "300600251 ",
          "pp": "ส.ชุมพร",
          "amountWithdrawn": " 2,544.12 "
        },
        {
          "determination": "300600252 ",
          "pp": "ส.หลังสวน",
          "amountWithdrawn": " 1,203.55 "
        },
        {
          "determination": "300600254 ",
          "pp": "ส.กระบี่",
          "amountWithdrawn": " 102.75 "
        },
        {
          "determination": "300600257 ",
          "pp": "ส.ระนอง",
          "amountWithdrawn": " 3.69 "
        },
        {
          "determination": "300600261 ",
          "pp": "ส.ตะกั่วปา",
          "amountWithdrawn": " 14.77 "
        },
      ]
    },
    {
      mode: "สำนักงานสรรพสามิตภาคที่ 9", total: 49653.77
      , data: [{
        "determination": "300600264 ",
        "pp": "ส.สงขลา",
        "amountWithdrawn": " 6,800.94 "
      },
      {
        "determination": "300600265 ",
        "pp": "ส.สะเดา",
        "amountWithdrawn": " 2,294.58 "
      },
      {
        "determination": "300600266 ",
        "pp": "ส.หาดใหญ่",
        "amountWithdrawn": " 4,381.32 "
      },
      {
        "determination": "300600268 ",
        "pp": "ส.ตรัง",
        "amountWithdrawn": " 6,241.61 "
      },
      {
        "determination": "300600269 ",
        "pp": "ส.กันตัง",
        "amountWithdrawn": " 9,966.88 "
      },
      {
        "determination": "300600270 ",
        "pp": "สตูล",
        "amountWithdrawn": " 583.53 "
      },
      {
        "determination": "300600272 ",
        "pp": "ส.ปัตตานี",
        "amountWithdrawn": " 89.98 "
      },
      {
        "determination": "300600273 ",
        "pp": "ส.มายอ",
        "amountWithdrawn": " 8.86 "
      },
      {
        "determination": "300600275 ",
        "pp": "ส.พัทลุง",
        "amountWithdrawn": " 8,184.80 "
      },
      {
        "determination": "300600276 ",
        "pp": "ส.ตะโหมด",
        "amountWithdrawn": " 2,626.43 "
      },
      {
        "determination": "300600278 ",
        "pp": "ส.ยะลา",
        "amountWithdrawn": " 6,517.24 "
      },
      {
        "determination": "300600279 ",
        "pp": "ส.เบตง",
        "amountWithdrawn": " 214.10 "
      },
      {
        "determination": "300600281 ",
        "pp": "ส.นราธิวาส",
        "amountWithdrawn": " 1,743.50 "
      },
      ]
    },
    {
      mode: "สำนักงานสรรพสามิตภาคที่ 10", total: 260875817.64
      , data: [{
        "determination": "300600291 ",
        "pp": "สคร.",
        "amountWithdrawn": " 186,540,236.69 "
      },
      {
        "determination": "300600293 ",
        "pp": "พื้นที่ 1",
        "amountWithdrawn": " 9,091.33 "
      },
      {
        "determination": "300600294 ",
        "pp": "พื้นที่ 2",
        "amountWithdrawn": " 24,000.46 "
      },
      {
        "determination": "300600295 ",
        "pp": "พื้นที่ 3",
        "amountWithdrawn": " 74,161,165.08 "
      },
      {
        "determination": "300600296 ",
        "pp": "พื้นที่ 4",
        "amountWithdrawn": " 134,806.31 "
      },
      {
        "determination": "300600297 ",
        "pp": "พื้นที่ 5",
        "amountWithdrawn": " 6,517.77 "
      },
      ]
    }


  ]


  dataDetail: any[] = [
    {
      determination: '300600017', total: 43.65, data: [{
        "docDate": "18.04.2019",
        "reference": "8800076691",
        "determination": "300600017",
        "disbursementUnit": "300600014",
        "debit": " 43.65 ",
        "credit": " -   ",
        "withdrawalAmount": " 43.65 "
      },]
    },
    {
      determination: '300600018', total: 12139.43, data: [{
        "docDate": "05.04.2019",
        "reference": "8800102835",
        "determination": "300600018",
        "disbursementUnit": "300600014",
        "debit": " 6,097.44 ",
        "credit": " -   ",
        "withdrawalAmount": " 6,097.44 "
      },
      {
        "docDate": "26.04.2019",
        "reference": "8800087183",
        "determination": "300600018",
        "disbursementUnit": "300600014",
        "debit": " 6,041.99 ",
        "credit": " -   ",
        "withdrawalAmount": " 6,041.99 "
      },]
    },
    {
      determination: '300600019', total: 19161.22, data: [{
        "docDate": "04.04.2019",
        "reference": "8800102847",
        "determination": "300600019",
        "disbursementUnit": "300600014",
        "debit": " 4,284.75 ",
        "credit": " -   ",
        "withdrawalAmount": " 4,284.75 "
      },
      {
        "docDate": "09.04.2019",
        "reference": "8800102857",
        "determination": "300600019",
        "disbursementUnit": "300600014",
        "debit": " 717.18 ",
        "credit": " -   ",
        "withdrawalAmount": " 717.18 "
      },
      {
        "docDate": "11.04.2019",
        "reference": "8800105513",
        "determination": "300600019",
        "disbursementUnit": "300600014",
        "debit": " 502.02 ",
        "credit": " -   ",
        "withdrawalAmount": " 502.02 "
      },
      {
        "docDate": "17.04.2019",
        "reference": "8800105520",
        "determination": "300600019",
        "disbursementUnit": "300600014",
        "debit": " 4,284.75 ",
        "credit": " -   ",
        "withdrawalAmount": " 4,284.75 "
      },
      {
        "docDate": "24.04.2019",
        "reference": "8800087197",
        "determination": "300600019",
        "disbursementUnit": "300600014",
        "debit": " 1,004.05 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,004.05 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800089551",
        "determination": "300600019",
        "disbursementUnit": "300600014",
        "debit": " 8,368.47 ",
        "credit": " -   ",
        "withdrawalAmount": " 8,368.47 "
      },]
    },
    {
      determination: '300600020', total: 3237.88, data: [{
        "docDate": "10.04.2019",
        "reference": "8800106703",
        "determination": "300600020",
        "disbursementUnit": "300600014",
        "debit": " 3,237.88 ",
        "credit": " -   ",
        "withdrawalAmount": " 3,237.88 "
      },]
    }
    , {
      determination: '300600021', total: 79488.24, data: [{
        "docDate": "02.04.2019",
        "reference": "8800100035",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 6,524.20 ",
        "credit": " -   ",
        "withdrawalAmount": " 6,524.20 "
      },
      {
        "docDate": "04.04.2019",
        "reference": "8800102955",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 9,155.33 ",
        "credit": " -   ",
        "withdrawalAmount": " 9,155.33 "
      },
      {
        "docDate": "05.04.2019",
        "reference": "8800102962",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 6,286.52 ",
        "credit": " -   ",
        "withdrawalAmount": " 6,286.52 "
      },
      {
        "docDate": "09.04.2019",
        "reference": "8800102969",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 487.57 ",
        "credit": " -   ",
        "withdrawalAmount": " 487.57 "
      },
      {
        "docDate": "10.04.2019",
        "reference": "8800103745",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 9,517.91 ",
        "credit": " -   ",
        "withdrawalAmount": " 9,517.91 "
      },
      {
        "docDate": "11.04.2019",
        "reference": "8800105579",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 9,444.38 ",
        "credit": " -   ",
        "withdrawalAmount": " 9,444.38 "
      },
      {
        "docDate": "17.04.2019",
        "reference": "8800105587",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 5,978.61 ",
        "credit": " -   ",
        "withdrawalAmount": " 5,978.61 "
      },
      {
        "docDate": "18.04.2019",
        "reference": "8800106733",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 4,330.19 ",
        "credit": " -   ",
        "withdrawalAmount": " 4,330.19 "
      },
      {
        "docDate": "22.04.2019",
        "reference": "8800111364",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 4,827.52 ",
        "credit": " -   ",
        "withdrawalAmount": " 4,827.52 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800111371",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 2,711.86 ",
        "credit": " -   ",
        "withdrawalAmount": " 2,711.86 "
      },
      {
        "docDate": "24.04.2019",
        "reference": "8800111378",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 5,327.86 ",
        "credit": " -   ",
        "withdrawalAmount": " 5,327.86 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800111387",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 5,222.22 ",
        "credit": " -   ",
        "withdrawalAmount": " 5,222.22 "
      },
      {
        "docDate": "26.04.2019",
        "reference": "8800111393",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 5,668.52 ",
        "credit": " -   ",
        "withdrawalAmount": " 5,668.52 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800089595",
        "determination": "300600021",
        "disbursementUnit": "300600014",
        "debit": " 4,005.55 ",
        "credit": " -   ",
        "withdrawalAmount": " 4,005.55 "
      },]
    },
    {
      determination: '300600023', total: 2077.54, data: [{
        "docDate": "01.04.2019",
        "reference": "8800099213",
        "determination": "300600023",
        "disbursementUnit": "300600014",
        "debit": " 811.65 ",
        "credit": " -   ",
        "withdrawalAmount": " 811.65 "
      },
      {
        "docDate": "02.04.2019",
        "reference": "8800100018",
        "determination": "300600023",
        "disbursementUnit": "300600014",
        "debit": " 46.39 ",
        "credit": " -   ",
        "withdrawalAmount": " 46.39 "
      },
      {
        "docDate": "10.04.2019",
        "reference": "8800103725",
        "determination": "300600023",
        "disbursementUnit": "300600014",
        "debit": " 54.71 ",
        "credit": " -   ",
        "withdrawalAmount": " 54.71 "
      },
      {
        "docDate": "17.04.2019",
        "reference": "8800105529",
        "determination": "300600023",
        "disbursementUnit": "300600014",
        "debit": " 3.69 ",
        "credit": " -   ",
        "withdrawalAmount": " 3.69 "
      },
      {
        "docDate": "19.04.2019",
        "reference": "8800096338",
        "determination": "300600023",
        "disbursementUnit": "300600014",
        "debit": " 159.29 ",
        "credit": " -   ",
        "withdrawalAmount": " 159.29 "
      },
      {
        "docDate": "22.04.2019",
        "reference": "8800111230",
        "determination": "300600023",
        "disbursementUnit": "300600014",
        "debit": " 250.32 ",
        "credit": " -   ",
        "withdrawalAmount": " 250.32 "
      },
      {
        "docDate": "24.04.2019",
        "reference": "8800111242",
        "determination": "300600023",
        "disbursementUnit": "300600014",
        "debit": " 104.53 ",
        "credit": " -   ",
        "withdrawalAmount": " 104.53 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800089558",
        "determination": "300600023",
        "disbursementUnit": "300600014",
        "debit": " 646.96 ",
        "credit": " -   ",
        "withdrawalAmount": " 646.96 "
      },]
    },
    {
      determination: '300600024', total: 100.59, data: [{
        "docDate": "03.04.2019",
        "reference": "8800093484",
        "determination": "300600024",
        "disbursementUnit": "300600014",
        "debit": " 100.59 ",
        "credit": " -   ",
        "withdrawalAmount": " 100.59 "
      },]
    },
    {
      determination: '300600028', total: 104.62, data: [{
        "docDate": "25.04.2019",
        "reference": "8800112345",
        "determination": "300600028",
        "disbursementUnit": "300600014",
        "debit": " 104.62 ",
        "credit": " -   ",
        "withdrawalAmount": " 104.62 "
      },]
    },
    {
      determination: '300600030', total: 3916.77, data: [{
        "docDate": "01.04.2019",
        "reference": "8800099224",
        "determination": "300600030",
        "disbursementUnit": "300600014",
        "debit": " 16.19 ",
        "credit": " -   ",
        "withdrawalAmount": " 16.19 "
      },
      {
        "docDate": "04.04.2019",
        "reference": "8800102911",
        "determination": "300600030",
        "disbursementUnit": "300600014",
        "debit": " 288.11 ",
        "credit": " -   ",
        "withdrawalAmount": " 288.11 "
      },
      {
        "docDate": "09.04.2019",
        "reference": "8800102924",
        "determination": "300600030",
        "disbursementUnit": "300600014",
        "debit": " 2,415.71 ",
        "credit": " -   ",
        "withdrawalAmount": " 2,415.71 "
      },
      {
        "docDate": "11.04.2019",
        "reference": "8800105558",
        "determination": "300600030",
        "disbursementUnit": "300600014",
        "debit": " 221.62 ",
        "credit": " -   ",
        "withdrawalAmount": " 221.62 "
      },
      {
        "docDate": "26.04.2019",
        "reference": "8800111312",
        "determination": "300600030",
        "disbursementUnit": "300600014",
        "debit": " 265.95 ",
        "credit": " -   ",
        "withdrawalAmount": " 265.95 "
      },
      {
        "docDate": "26.04.2019",
        "reference": "8800111318",
        "determination": "300600030",
        "disbursementUnit": "300600014",
        "debit": " 310.27 ",
        "credit": " -   ",
        "withdrawalAmount": " 310.27 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800089570",
        "determination": "300600030",
        "disbursementUnit": "300600014",
        "debit": " 221.62 ",
        "credit": " -   ",
        "withdrawalAmount": " 221.62 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800089576",
        "determination": "300600030",
        "disbursementUnit": "300600014",
        "debit": " 177.30 ",
        "credit": " -   ",
        "withdrawalAmount": " 177.30 "
      },]
    },
    {
      determination: '300600031', total: 937.45, data: [{
        "docDate": "03.04.2019",
        "reference": "8800093494",
        "determination": "300600031",
        "disbursementUnit": "300600014",
        "debit": " 146.75 ",
        "credit": " -   ",
        "withdrawalAmount": " 146.75 "
      },
      {
        "docDate": "17.04.2019",
        "reference": "8800105566",
        "determination": "300600031",
        "disbursementUnit": "300600014",
        "debit": " 157.81 ",
        "credit": " -   ",
        "withdrawalAmount": " 157.81 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800111336",
        "determination": "300600031",
        "disbursementUnit": "300600014",
        "debit": " 212.03 ",
        "credit": " -   ",
        "withdrawalAmount": " 212.03 "
      },
      {
        "docDate": "29.04.2019",
        "reference": "8800112336",
        "determination": "300600031",
        "disbursementUnit": "300600014",
        "debit": " 420.86 ",
        "credit": " -   ",
        "withdrawalAmount": " 420.86 "
      },]
    },
    {
      determination: '300600032', total: 715074.52, data: [{
        "docDate": "02.04.2019",
        "reference": "8800100003",
        "determination": "300600032",
        "disbursementUnit": "300600014",
        "debit": " 74,391.42 ",
        "credit": " -   ",
        "withdrawalAmount": " 74,391.42 "
      },
      {
        "docDate": "05.04.2019",
        "reference": "8800102813",
        "determination": "300600032",
        "disbursementUnit": "300600014",
        "debit": " 73,846.43 ",
        "credit": " -   ",
        "withdrawalAmount": " 73,846.43 "
      },
      {
        "docDate": "09.04.2019",
        "reference": "8800102818",
        "determination": "300600032",
        "disbursementUnit": "300600014",
        "debit": " 125,580.73 ",
        "credit": " -   ",
        "withdrawalAmount": " 125,580.73 "
      },
      {
        "docDate": "18.04.2019",
        "reference": "8800076682",
        "determination": "300600032",
        "disbursementUnit": "300600014",
        "debit": " 173,446.72 ",
        "credit": " -   ",
        "withdrawalAmount": " 173,446.72 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800087159",
        "determination": "300600032",
        "disbursementUnit": "300600014",
        "debit": " 194,862.52 ",
        "credit": " -   ",
        "withdrawalAmount": " 194,862.52 "
      },
      {
        "docDate": "29.04.2019",
        "reference": "8800112310",
        "determination": "300600032",
        "disbursementUnit": "300600014",
        "debit": " 72,946.70 ",
        "credit": " -   ",
        "withdrawalAmount": " 72,946.70 "
      },]
    },
    {
      determination: '300600035', total: 44.32, data: [{
        "docDate": "23.04.2019",
        "reference": "8800087144",
        "determination": "300600035",
        "disbursementUnit": "300600014",
        "debit": " 44.32 ",
        "credit": " -   ",
        "withdrawalAmount": " 44.32 "
      },]
    },
    {
      determination: '300600036', total: 3544.64, data: [{
        "docDate": "09.04.2019",
        "reference": "8800102946",
        "determination": "300600036",
        "disbursementUnit": "300600014",
        "debit": " 1,259.57 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,259.57 "
      },
      {
        "docDate": "22.04.2019",
        "reference": "8800111350",
        "determination": "300600036",
        "disbursementUnit": "300600014",
        "debit": " 1,051.51 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,051.51 "
      },
      {
        "docDate": "29.04.2019",
        "reference": "8800089590",
        "determination": "300600036",
        "disbursementUnit": "300600014",
        "debit": " 1,233.56 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,233.56 "
      },]
    },
    {
      determination: '300600038', total: 469.10, data: [{
        "docDate": "10.04.2019",
        "reference": "8800103753",
        "determination": "300600038",
        "disbursementUnit": "300600014",
        "debit": " 221.62 ",
        "credit": " -   ",
        "withdrawalAmount": " 221.62 "
      },
      {
        "docDate": "18.04.2019",
        "reference": "8800106745",
        "determination": "300600038",
        "disbursementUnit": "300600014",
        "debit": " 88.65 ",
        "credit": " -   ",
        "withdrawalAmount": " 88.65 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800108708",
        "determination": "300600038",
        "disbursementUnit": "300600014",
        "debit": " 158.83 ",
        "credit": " -   ",
        "withdrawalAmount": " 158.83 "
      },]
    },
    {
      determination: '300600039', total: 25813.32, data: [
        {
          "docDate": "02.04.2019",
          "reference": "8800102120",
          "determination": "300600039",
          "disbursementUnit": "300600014",
          "debit": " 3,721.02 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,721.02 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102143",
          "determination": "300600039",
          "disbursementUnit": "300600014",
          "debit": " 3,958.59 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,958.59 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800105697",
          "determination": "300600039",
          "disbursementUnit": "300600014",
          "debit": " 12,376.72 ",
          "credit": " -   ",
          "withdrawalAmount": " 12,376.72 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800105702",
          "determination": "300600039",
          "disbursementUnit": "300600014",
          "debit": " 213.77 ",
          "credit": " -   ",
          "withdrawalAmount": " 213.77 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111463",
          "determination": "300600039",
          "disbursementUnit": "300600014",
          "debit": " 313.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 313.99 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111470",
          "determination": "300600039",
          "disbursementUnit": "300600014",
          "debit": " 624.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 624.99 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111476",
          "determination": "300600039",
          "disbursementUnit": "300600014",
          "debit": " 883.22 ",
          "credit": " -   ",
          "withdrawalAmount": " 883.22 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113306",
          "determination": "300600039",
          "disbursementUnit": "300600014",
          "debit": " 3,721.02 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,721.02 "
        },]
    },
    {
      determination: '300600041', total: 13801.87, data: [{
        "docDate": "02.04.2019",
        "reference": "8800071841",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 436.65 ",
        "credit": " -   ",
        "withdrawalAmount": " 436.65 "
      },
      {
        "docDate": "05.04.2019",
        "reference": "8800071848",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 2,651.88 ",
        "credit": " -   ",
        "withdrawalAmount": " 2,651.88 "
      },
      {
        "docDate": "10.04.2019",
        "reference": "8800103762",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 897.72 ",
        "credit": " -   ",
        "withdrawalAmount": " 897.72 "
      },
      {
        "docDate": "11.04.2019",
        "reference": "8800105593",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 1,242.13 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,242.13 "
      },
      {
        "docDate": "17.04.2019",
        "reference": "8800105600",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 980.69 ",
        "credit": " -   ",
        "withdrawalAmount": " 980.69 "
      },
      {
        "docDate": "18.04.2019",
        "reference": "8800106752",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 2,623.67 ",
        "credit": " -   ",
        "withdrawalAmount": " 2,623.67 "
      },
      {
        "docDate": "22.04.2019",
        "reference": "8800085983",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 160.01 ",
        "credit": " -   ",
        "withdrawalAmount": " 160.01 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800108716",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 156.22 ",
        "credit": " -   ",
        "withdrawalAmount": " 156.22 "
      },
      {
        "docDate": "24.04.2019",
        "reference": "8800100711",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 1,581.15 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,581.15 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800110402",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 220.23 ",
        "credit": " -   ",
        "withdrawalAmount": " 220.23 "
      },
      {
        "docDate": "26.04.2019",
        "reference": "8800111413",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 2,226.65 ",
        "credit": " -   ",
        "withdrawalAmount": " 2,226.65 "
      },
      {
        "docDate": "29.04.2019",
        "reference": "8800112352",
        "determination": "300600041",
        "disbursementUnit": "300600014",
        "debit": " 624.87 ",
        "credit": " -   ",
        "withdrawalAmount": " 624.87 "
      },]
    },
    {
      determination: '300600042', total: 4538.46, data: [{
        "docDate": "10.04.2019",
        "reference": "8800103768",
        "determination": "300600042",
        "disbursementUnit": "300600014",
        "debit": " 400.04 ",
        "credit": " -   ",
        "withdrawalAmount": " 400.04 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800110411",
        "determination": "300600042",
        "disbursementUnit": "300600014",
        "debit": " 523.16 ",
        "credit": " -   ",
        "withdrawalAmount": " 523.16 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113210",
        "determination": "300600042",
        "disbursementUnit": "300600014",
        "debit": " 3,615.26 ",
        "credit": " -   ",
        "withdrawalAmount": " 3,615.26 "
      },]
    },
    {
      determination: '300600043', total: 3344.57, data: [{
        "docDate": "10.04.2019",
        "reference": "8800103773",
        "determination": "300600043",
        "disbursementUnit": "300600014",
        "debit": " 937.30 ",
        "credit": " -   ",
        "withdrawalAmount": " 937.30 "
      },
      {
        "docDate": "19.04.2019",
        "reference": "8800096362",
        "determination": "300600043",
        "disbursementUnit": "300600014",
        "debit": " 288.02 ",
        "credit": " -   ",
        "withdrawalAmount": " 288.02 "
      },
      {
        "docDate": "22.04.2019",
        "reference": "8800085989",
        "determination": "300600043",
        "disbursementUnit": "300600014",
        "debit": " 500.66 ",
        "credit": " -   ",
        "withdrawalAmount": " 500.66 "
      },
      {
        "docDate": "24.04.2019",
        "reference": "8800100716",
        "determination": "300600043",
        "disbursementUnit": "300600014",
        "debit": " 1,117.93 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,117.93 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113216",
        "determination": "300600043",
        "disbursementUnit": "300600014",
        "debit": " 500.66 ",
        "credit": " -   ",
        "withdrawalAmount": " 500.66 "
      },]
    },
    {
      determination: '300600045', total: 450221.35, data: [{
        "docDate": "04.04.2019",
        "reference": "8800071873",
        "determination": "300600045",
        "disbursementUnit": "300600014",
        "debit": " 54,485.77 ",
        "credit": " -   ",
        "withdrawalAmount": " 54,485.77 "
      },
      {
        "docDate": "10.04.2019",
        "reference": "8800103780",
        "determination": "300600045",
        "disbursementUnit": "300600014",
        "debit": " 105,325.62 ",
        "credit": " -   ",
        "withdrawalAmount": " 105,325.62 "
      },
      {
        "docDate": "17.04.2019",
        "reference": "8800105612",
        "determination": "300600045",
        "disbursementUnit": "300600014",
        "debit": " 138,505.11 ",
        "credit": " -   ",
        "withdrawalAmount": " 138,505.11 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800110423",
        "determination": "300600045",
        "disbursementUnit": "300600014",
        "debit": " 116,224.14 ",
        "credit": " -   ",
        "withdrawalAmount": " 116,224.14 "
      },
      {
        "docDate": "29.04.2019",
        "reference": "8800112362",
        "determination": "300600045",
        "disbursementUnit": "300600014",
        "debit": " 53.72 ",
        "credit": " -   ",
        "withdrawalAmount": " 53.72 "
      },
      {
        "docDate": "29.04.2019",
        "reference": "8800112367",
        "determination": "300600045",
        "disbursementUnit": "300600014",
        "debit": " 107.37 ",
        "credit": " -   ",
        "withdrawalAmount": " 107.37 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113226",
        "determination": "300600045",
        "disbursementUnit": "300600014",
        "debit": " 35,519.62 ",
        "credit": " -   ",
        "withdrawalAmount": " 35,519.62 "
      },]
    },
    {
      determination: '300600046', total: 1625.91, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800071886",
          "determination": "300600046",
          "disbursementUnit": "300600014",
          "debit": " 89.42 ",
          "credit": " -   ",
          "withdrawalAmount": " 89.42 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105626",
          "determination": "300600046",
          "disbursementUnit": "300600014",
          "debit": " 285.19 ",
          "credit": " -   ",
          "withdrawalAmount": " 285.19 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800100722",
          "determination": "300600046",
          "disbursementUnit": "300600014",
          "debit": " 701.50 ",
          "credit": " -   ",
          "withdrawalAmount": " 701.50 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800100729",
          "determination": "300600046",
          "disbursementUnit": "300600014",
          "debit": " 44.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.99 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800100736",
          "determination": "300600046",
          "disbursementUnit": "300600014",
          "debit": " 69.15 ",
          "credit": " -   ",
          "withdrawalAmount": " 69.15 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111425",
          "determination": "300600046",
          "disbursementUnit": "300600014",
          "debit": " 253.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 253.41 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113234",
          "determination": "300600046",
          "disbursementUnit": "300600014",
          "debit": " 182.25 ",
          "credit": " -   ",
          "withdrawalAmount": " 182.25 "
        },]
    },
    {
      determination: '300600048', total: 6306.28, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800071895",
          "determination": "300600048",
          "disbursementUnit": "300600014",
          "debit": " 537.14 ",
          "credit": " -   ",
          "withdrawalAmount": " 537.14 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102008",
          "determination": "300600048",
          "disbursementUnit": "300600014",
          "debit": " 492.47 ",
          "credit": " -   ",
          "withdrawalAmount": " 492.47 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800105640",
          "determination": "300600048",
          "disbursementUnit": "300600014",
          "debit": " 537.14 ",
          "credit": " -   ",
          "withdrawalAmount": " 537.14 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106768",
          "determination": "300600048",
          "disbursementUnit": "300600014",
          "debit": " 647.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 647.60 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108206",
          "determination": "300600048",
          "disbursementUnit": "300600014",
          "debit": " 348.93 ",
          "credit": " -   ",
          "withdrawalAmount": " 348.93 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108725",
          "determination": "300600048",
          "disbursementUnit": "300600014",
          "debit": " 514.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 514.71 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111432",
          "determination": "300600048",
          "disbursementUnit": "300600014",
          "debit": " 1,319.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,319.60 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112375",
          "determination": "300600048",
          "disbursementUnit": "300600014",
          "debit": " 317.07 ",
          "credit": " -   ",
          "withdrawalAmount": " 317.07 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113244",
          "determination": "300600048",
          "disbursementUnit": "300600014",
          "debit": " 1,591.62 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,591.62 "
        },]
    },
    {
      determination: '300600049', total: 915.04, data: [{
        "docDate": "30.04.2019",
        "reference": "8800113252",
        "determination": "300600049",
        "disbursementUnit": "300600014",
        "debit": " 302.12 ",
        "credit": " -   ",
        "withdrawalAmount": " 302.12 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113257",
        "determination": "300600049",
        "disbursementUnit": "300600014",
        "debit": " 612.92 ",
        "credit": " -   ",
        "withdrawalAmount": " 612.92 "
      },]
    },
    {
      determination: '300600051', total: 6736.36, data: [{
        "docDate": "04.04.2019",
        "reference": "8800102040",
        "determination": "300600051",
        "disbursementUnit": "300600014",
        "debit": " 208.68 ",
        "credit": " -   ",
        "withdrawalAmount": " 208.68 "
      },
      {
        "docDate": "04.04.2019",
        "reference": "8800102045",
        "determination": "300600051",
        "disbursementUnit": "300600014",
        "debit": " 1,790.51 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,790.51 "
      },
      {
        "docDate": "17.04.2019",
        "reference": "8800105658",
        "determination": "300600051",
        "disbursementUnit": "300600014",
        "debit": " 3,045.58 ",
        "credit": " -   ",
        "withdrawalAmount": " 3,045.58 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800108742",
        "determination": "300600051",
        "disbursementUnit": "300600014",
        "debit": " 1,006.53 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,006.53 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113269",
        "determination": "300600051",
        "disbursementUnit": "300600014",
        "debit": " 667.95 ",
        "credit": " -   ",
        "withdrawalAmount": " 667.95 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113276",
        "determination": "300600051",
        "disbursementUnit": "300600014",
        "debit": " 17.11 ",
        "credit": " -   ",
        "withdrawalAmount": " 17.11 "
      },]
    },
    {
      determination: '300600052', total: 59.79, data: [{
        "docDate": "25.04.2019",
        "reference": "8800110445",
        "determination": "300600052",
        "disbursementUnit": "300600014",
        "debit": " 59.79 ",
        "credit": " -   ",
        "withdrawalAmount": " 59.79 "
      },]
    },
    {
      determination: '300600053', total: 418.82, data: [
        {
          "docDate": "24.04.2019",
          "reference": "8800100754",
          "determination": "300600053",
          "disbursementUnit": "300600014",
          "debit": " 418.82 ",
          "credit": " -   ",
          "withdrawalAmount": " 418.82 "
        },]
    },
    {
      determination: '300600054', total: 1124.92, data: [{
        "docDate": "01.04.2019",
        "reference": "8800102149",
        "determination": "300600054",
        "disbursementUnit": "300600014",
        "debit": " 225.33 ",
        "credit": " -   ",
        "withdrawalAmount": " 225.33 "
      },
      {
        "docDate": "10.04.2019",
        "reference": "8800103814",
        "determination": "300600054",
        "disbursementUnit": "300600014",
        "debit": " 178.40 ",
        "credit": " -   ",
        "withdrawalAmount": " 178.40 "
      },
      {
        "docDate": "10.04.2019",
        "reference": "8800103821",
        "determination": "300600054",
        "disbursementUnit": "300600014",
        "debit": " 90.01 ",
        "credit": " -   ",
        "withdrawalAmount": " 90.01 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113316",
        "determination": "300600054",
        "disbursementUnit": "300600014",
        "debit": " 94.19 ",
        "credit": " -   ",
        "withdrawalAmount": " 94.19 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113321",
        "determination": "300600054",
        "disbursementUnit": "300600014",
        "debit": " 536.99 ",
        "credit": " -   ",
        "withdrawalAmount": " 536.99 "
      },]
    },
    {
      determination: '300600055', total: 118.20, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800102077",
          "determination": "300600055",
          "disbursementUnit": "300600014",
          "debit": " 118.20 ",
          "credit": " -   ",
          "withdrawalAmount": " 118.20 "
        },]
    },
    {
      determination: '300600056', total: 7142417.56, data: [{
        "docDate": "01.04.2019",
        "reference": "8800102162",
        "determination": "300600056",
        "disbursementUnit": "300600014",
        "debit": " 481.66 ",
        "credit": " -   ",
        "withdrawalAmount": " 481.66 "
      },
      {
        "docDate": "02.04.2019",
        "reference": "8800102168",
        "determination": "300600056",
        "disbursementUnit": "300600014",
        "debit": " 240.83 ",
        "credit": " -   ",
        "withdrawalAmount": " 240.83 "
      },
      {
        "docDate": "02.04.2019",
        "reference": "8800102173",
        "determination": "300600056",
        "disbursementUnit": "300600014",
        "debit": " 33.69 ",
        "credit": " -   ",
        "withdrawalAmount": " 33.69 "
      },
      {
        "docDate": "04.04.2019",
        "reference": "8800102181",
        "determination": "300600056",
        "disbursementUnit": "300600014",
        "debit": " 1,831,409.69 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,831,409.69 "
      },
      {
        "docDate": "11.04.2019",
        "reference": "8800105720",
        "determination": "300600056",
        "disbursementUnit": "300600014",
        "debit": " 361.24 ",
        "credit": " -   ",
        "withdrawalAmount": " 361.24 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800108774",
        "determination": "300600056",
        "disbursementUnit": "300600014",
        "debit": " 2,274,443.53 ",
        "credit": " -   ",
        "withdrawalAmount": " 2,274,443.53 "
      },
      {
        "docDate": "26.04.2019",
        "reference": "8800111486",
        "determination": "300600056",
        "disbursementUnit": "300600014",
        "debit": " 1,373,557.28 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,373,557.28 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113327",
        "determination": "300600056",
        "disbursementUnit": "300600014",
        "debit": " 1,661,889.64 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,661,889.64 "
      },]
    },
    {
      determination: '300600058', total: 295.56, data: [{
        "docDate": "03.04.2019",
        "reference": "8800102098",
        "determination": "300600058",
        "disbursementUnit": "300600014",
        "debit": " 98.52 ",
        "credit": " -   ",
        "withdrawalAmount": " 98.52 "
      },
      {
        "docDate": "09.04.2019",
        "reference": "8800102998",
        "determination": "300600058",
        "disbursementUnit": "300600014",
        "debit": " 98.52 ",
        "credit": " -   ",
        "withdrawalAmount": " 98.52 "
      },
      {
        "docDate": "17.04.2019",
        "reference": "8800106795",
        "determination": "300600058",
        "disbursementUnit": "300600014",
        "debit": " 98.52 ",
        "credit": " -   ",
        "withdrawalAmount": " 98.52 "
      },]
    },
    {
      determination: '300600063', total: 237677.93, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800099453",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 16,661.62 ",
          "credit": " -   ",
          "withdrawalAmount": " 16,661.62 "
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100043",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 9,424.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 9,424.41 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800100811",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 17,733.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 17,733.99 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800100817",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 6,446.49 ",
          "credit": " -   ",
          "withdrawalAmount": " 6,446.49 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102191",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 9,962.72 ",
          "credit": " -   ",
          "withdrawalAmount": " 9,962.72 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103008",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 18,518.42 ",
          "credit": " -   ",
          "withdrawalAmount": " 18,518.42 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800103830",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 33,657.02 ",
          "credit": " -   ",
          "withdrawalAmount": " 33,657.02 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105730",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 12,095.22 ",
          "credit": " -   ",
          "withdrawalAmount": " 12,095.22 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800105736",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 16,046.05 ",
          "credit": " -   ",
          "withdrawalAmount": " 16,046.05 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106807",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 7,486.07 ",
          "credit": " -   ",
          "withdrawalAmount": " 7,486.07 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107520",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 5,004.12 ",
          "credit": " -   ",
          "withdrawalAmount": " 5,004.12 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108234",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 11,693.38 ",
          "credit": " -   ",
          "withdrawalAmount": " 11,693.38 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108785",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 14,334.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 14,334.78 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110469",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 6,465.08 ",
          "credit": " -   ",
          "withdrawalAmount": " 6,465.08 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110476",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 3,704.98 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,704.98 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111493",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 14,810.95 ",
          "credit": " -   ",
          "withdrawalAmount": " 14,810.95 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112402",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 18,848.46 ",
          "credit": " -   ",
          "withdrawalAmount": " 18,848.46 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113333",
          "determination": "300600063",
          "disbursementUnit": "300600014",
          "debit": " 14,784.17 ",
          "credit": " -   ",
          "withdrawalAmount": " 14,784.17 "
        },]
    },
    {
      determination: '300600064', total: 67331.53, data: [{
        "docDate": "04.04.2019",
        "reference": "8800100823",
        "determination": "300600064",
        "disbursementUnit": "300600014",
        "debit": " 19,283.47 ",
        "credit": " -   ",
        "withdrawalAmount": " 19,283.47 "
      },
      {
        "docDate": "05.04.2019",
        "reference": "8800102197",
        "determination": "300600064",
        "disbursementUnit": "300600014",
        "debit": " 154.70 ",
        "credit": " -   ",
        "withdrawalAmount": " 154.70 "
      },
      {
        "docDate": "09.04.2019",
        "reference": "8800103014",
        "determination": "300600064",
        "disbursementUnit": "300600014",
        "debit": " 12,425.09 ",
        "credit": " -   ",
        "withdrawalAmount": " 12,425.09 "
      },
      {
        "docDate": "17.04.2019",
        "reference": "8800105745",
        "determination": "300600064",
        "disbursementUnit": "300600014",
        "debit": " 13,213.35 ",
        "credit": " -   ",
        "withdrawalAmount": " 13,213.35 "
      },
      {
        "docDate": "19.04.2019",
        "reference": "8800107527",
        "determination": "300600064",
        "disbursementUnit": "300600014",
        "debit": " 8,086.66 ",
        "credit": " -   ",
        "withdrawalAmount": " 8,086.66 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800110483",
        "determination": "300600064",
        "disbursementUnit": "300600014",
        "debit": " 14,168.26 ",
        "credit": " -   ",
        "withdrawalAmount": " 14,168.26 "
      },]
    },
    {
      determination: '300600065', total: 10895.19, data: [
        {
          "docDate": "02.04.2019",
          "reference": "8800100051",
          "determination": "300600065",
          "disbursementUnit": "300600014",
          "debit": " 1,619.40 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,619.40 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103021",
          "determination": "300600065",
          "disbursementUnit": "300600014",
          "debit": " 1,335.85 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,335.85 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800103838",
          "determination": "300600065",
          "disbursementUnit": "300600014",
          "debit": " 3,197.72 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,197.72 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106815",
          "determination": "300600065",
          "disbursementUnit": "300600014",
          "debit": " 1,547.15 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,547.15 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110489",
          "determination": "300600065",
          "disbursementUnit": "300600014",
          "debit": " 1,557.88 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,557.88 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113341",
          "determination": "300600065",
          "disbursementUnit": "300600014",
          "debit": " 1,637.19 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,637.19 "
        },]
    },
    {
      determination: '300600068', total: 53926.92, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800105977",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " -   ",
          "credit": " 2,807.84 ",
          "withdrawalAmount": " (2,807.84)"
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100057",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 2,807.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,807.84 "
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100966",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 2,807.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,807.84 "
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100972",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " -   ",
          "credit": " 2,807.84 ",
          "withdrawalAmount": " (2,807.84)"
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100408",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 2,807.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,807.84 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800100831",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 5,956.39 ",
          "credit": " -   ",
          "withdrawalAmount": " 5,956.39 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102206",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 4,924.76 ",
          "credit": " -   ",
          "withdrawalAmount": " 4,924.76 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103044",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 4,590.89 ",
          "credit": " -   ",
          "withdrawalAmount": " 4,590.89 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800103845",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 4,320.54 ",
          "credit": " -   ",
          "withdrawalAmount": " 4,320.54 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800105971",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 2,807.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,807.84 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106821",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 2,807.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,807.84 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107536",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 2,807.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,807.84 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108257",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 6,355.03 ",
          "credit": " -   ",
          "withdrawalAmount": " 6,355.03 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108807",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 3,273.25 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,273.25 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800100773",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 2,848.47 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,848.47 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110497",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 2,807.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,807.84 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111510",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 3,922.80 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,922.80 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113347",
          "determination": "300600068",
          "disbursementUnit": "300600014",
          "debit": " 3,695.59 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,695.59 "
        },]
    },
    {
      determination: '300600070', total: 1874.93, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800100838",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 118.20 ",
          "credit": " -   ",
          "withdrawalAmount": " 118.20 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800100844",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 147.75 ",
          "credit": " -   ",
          "withdrawalAmount": " 147.75 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800100850",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 110.81 ",
          "credit": " -   ",
          "withdrawalAmount": " 110.81 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800103855",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 147.75 ",
          "credit": " -   ",
          "withdrawalAmount": " 147.75 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800103864",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 258.56 ",
          "credit": " -   ",
          "withdrawalAmount": " 258.56 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106829",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 33.24 ",
          "credit": " -   ",
          "withdrawalAmount": " 33.24 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106835",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 147.75 ",
          "credit": " -   ",
          "withdrawalAmount": " 147.75 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106842",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 59.10 ",
          "credit": " -   ",
          "withdrawalAmount": " 59.10 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108814",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 184.69 ",
          "credit": " -   ",
          "withdrawalAmount": " 184.69 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108821",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 236.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 236.86 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108828",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 83.01 ",
          "credit": " -   ",
          "withdrawalAmount": " 83.01 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111516",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 88.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 88.65 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113353",
          "determination": "300600070",
          "disbursementUnit": "300600014",
          "debit": " 258.56 ",
          "credit": " -   ",
          "withdrawalAmount": " 258.56 "
        },]
    },
    {
      determination: '300600072', total: 20614.64, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800099488",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 369.37 ",
          "credit": " -   ",
          "withdrawalAmount": " 369.37 "
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100063",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 1,994.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,994.60 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800100856",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 1,181.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,181.99 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800100862",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 1,920.74 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,920.74 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102212",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 1,625.26 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,625.26 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103051",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 2,216.24 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,216.24 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800103870",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 3,357.58 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,357.58 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105776",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 73.87 ",
          "credit": " -   ",
          "withdrawalAmount": " 73.87 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800105783",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 1,255.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,255.86 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106848",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 221.62 ",
          "credit": " -   ",
          "withdrawalAmount": " 221.62 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107542",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 432.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 432.16 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108272",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 738.75 ",
          "credit": " -   ",
          "withdrawalAmount": " 738.75 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800100779",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 794.15 ",
          "credit": " -   ",
          "withdrawalAmount": " 794.15 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800100786",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 1,772.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,772.99 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111527",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 443.24 ",
          "credit": " -   ",
          "withdrawalAmount": " 443.24 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111533",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 517.12 ",
          "credit": " -   ",
          "withdrawalAmount": " 517.12 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112415",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 1,108.11 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,108.11 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113378",
          "determination": "300600072",
          "disbursementUnit": "300600014",
          "debit": " 590.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 590.99 "
        },]
    },
    {
      determination: '300600073', total: 27.86, data: [
        {
          "docDate": "17.04.2019",
          "reference": "8800105788",
          "determination": "300600073",
          "disbursementUnit": "300600014",
          "debit": " 27.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 27.86 "
        },]
    },
    {
      determination: '300600074', total: 2083.27, data: [
        {
          "docDate": "10.04.2019",
          "reference": "8800103877",
          "determination": "300600074",
          "disbursementUnit": "300600014",
          "debit": " 1,551.37 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,551.37 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110504",
          "determination": "300600074",
          "disbursementUnit": "300600014",
          "debit": " 265.95 ",
          "credit": " -   ",
          "withdrawalAmount": " 265.95 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110517",
          "determination": "300600074",
          "disbursementUnit": "300600014",
          "debit": " 177.30 ",
          "credit": " -   ",
          "withdrawalAmount": " 177.30 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113385",
          "determination": "300600074",
          "disbursementUnit": "300600014",
          "debit": " 88.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 88.65 "
        },]
    },
    {
      determination: '300600077', total: 211.86, data: [{
        "docDate": "04.04.2019",
        "reference": "8800100882",
        "determination": "300600077",
        "disbursementUnit": "300600014",
        "debit": " 100.61 ",
        "credit": " -   ",
        "withdrawalAmount": " 100.61 "
      },
      {
        "docDate": "19.04.2019",
        "reference": "8800107556",
        "determination": "300600077",
        "disbursementUnit": "300600014",
        "debit": " 111.25 ",
        "credit": " -   ",
        "withdrawalAmount": " 111.25 "
      },]
    },
    {
      determination: '300600079', total: 2420.85, data: [
        {
          "docDate": "02.04.2019",
          "reference": "8800100073",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 116.57 ",
          "credit": " -   ",
          "withdrawalAmount": " 116.57 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800100918",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 29.80 ",
          "credit": " -   ",
          "withdrawalAmount": " 29.80 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103080",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 1,288.08 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,288.08 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105852",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 370.11 ",
          "credit": " -   ",
          "withdrawalAmount": " 370.11 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106880",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 79.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 79.78 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107585",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 33.63 ",
          "credit": " -   ",
          "withdrawalAmount": " 33.63 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108296",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 79.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 79.78 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108301",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 95.07 ",
          "credit": " -   ",
          "withdrawalAmount": " 95.07 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110588",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 23.85 ",
          "credit": " -   ",
          "withdrawalAmount": " 23.85 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112429",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 195.80 ",
          "credit": " -   ",
          "withdrawalAmount": " 195.80 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113499",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 28.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 28.60 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113504",
          "determination": "300600079",
          "disbursementUnit": "300600014",
          "debit": " 79.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 79.78 "
        },]
    },
    {
      determination: '300600080', total: 862.10, data: [
        {
          "docDate": "05.04.2019",
          "reference": "8800102238",
          "determination": "300600080",
          "disbursementUnit": "300600014",
          "debit": " 110.81 ",
          "credit": " -   ",
          "withdrawalAmount": " 110.81 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102250",
          "determination": "300600080",
          "disbursementUnit": "300600014",
          "debit": " 28.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 28.86 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103088",
          "determination": "300600080",
          "disbursementUnit": "300600014",
          "debit": " 139.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 139.99 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800103915",
          "determination": "300600080",
          "disbursementUnit": "300600014",
          "debit": " 189.50 ",
          "credit": " -   ",
          "withdrawalAmount": " 189.50 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105864",
          "determination": "300600080",
          "disbursementUnit": "300600014",
          "debit": " 25.49 ",
          "credit": " -   ",
          "withdrawalAmount": " 25.49 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800105872",
          "determination": "300600080",
          "disbursementUnit": "300600014",
          "debit": " 274.37 ",
          "credit": " -   ",
          "withdrawalAmount": " 274.37 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107592",
          "determination": "300600080",
          "disbursementUnit": "300600014",
          "debit": " 62.05 ",
          "credit": " -   ",
          "withdrawalAmount": " 62.05 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108857",
          "determination": "300600080",
          "disbursementUnit": "300600014",
          "debit": " 31.03 ",
          "credit": " -   ",
          "withdrawalAmount": " 31.03 "
        },]
    },
    {
      determination: '300600083', total: 1746.87, data: [
        {
          "docDate": "03.04.2019",
          "reference": "8800100440",
          "determination": "300600083",
          "disbursementUnit": "300600014",
          "debit": " 188.38 ",
          "credit": " -   ",
          "withdrawalAmount": " 188.38 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102300",
          "determination": "300600083",
          "disbursementUnit": "300600014",
          "debit": " 18.62 ",
          "credit": " -   ",
          "withdrawalAmount": " 18.62 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105960",
          "determination": "300600083",
          "disbursementUnit": "300600014",
          "debit": " 55.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 55.41 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108323",
          "determination": "300600083",
          "disbursementUnit": "300600014",
          "debit": " 165.80 ",
          "credit": " -   ",
          "withdrawalAmount": " 165.80 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108333",
          "determination": "300600083",
          "disbursementUnit": "300600014",
          "debit": " 904.97 ",
          "credit": " -   ",
          "withdrawalAmount": " 904.97 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110617",
          "determination": "300600083",
          "disbursementUnit": "300600014",
          "debit": " 192.07 ",
          "credit": " -   ",
          "withdrawalAmount": " 192.07 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113579",
          "determination": "300600083",
          "disbursementUnit": "300600014",
          "debit": " 221.62 ",
          "credit": " -   ",
          "withdrawalAmount": " 221.62 "
        },]
    },
    {
      determination: '300600084', total: 44.32, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800100951",
          "determination": "300600084",
          "disbursementUnit": "300600014",
          "debit": " 29.55 ",
          "credit": " -   ",
          "withdrawalAmount": " 29.55 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800100957",
          "determination": "300600084",
          "disbursementUnit": "300600014",
          "debit": " 14.77 ",
          "credit": " -   ",
          "withdrawalAmount": " 14.77 "
        },]
    },
    {
      determination: '300600088', total: 1687.26, data: [
        {
          "docDate": "30.04.2019",
          "reference": "8800113450",
          "determination": "300600088",
          "disbursementUnit": "300600014",
          "debit": " 207.94 ",
          "credit": " -   ",
          "withdrawalAmount": " 207.94 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113456",
          "determination": "300600088",
          "disbursementUnit": "300600014",
          "debit": " 807.59 ",
          "credit": " -   ",
          "withdrawalAmount": " 807.59 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113462",
          "determination": "300600088",
          "disbursementUnit": "300600014",
          "debit": " 671.73 ",
          "credit": " -   ",
          "withdrawalAmount": " 671.73 "
        },]
    },
    {
      determination: '300600090', total: 66.05, data: [
        {
          "docDate": "30.04.2019",
          "reference": "8800113480",
          "determination": "300600090",
          "disbursementUnit": "300600014",
          "debit": " 66.05 ",
          "credit": " -   ",
          "withdrawalAmount": " 66.05 "
        },]
    },
    {
      determination: '300600091', total: 53.92, data: [{
        "docDate": "05.04.2019",
        "reference": "8800102227",
        "determination": "300600091",
        "disbursementUnit": "300600014",
        "debit": " 40.78 ",
        "credit": " -   ",
        "withdrawalAmount": " 40.78 "
      },
      {
        "docDate": "19.04.2019",
        "reference": "8800107572",
        "determination": "300600091",
        "disbursementUnit": "300600014",
        "debit": " 13.14 ",
        "credit": " -   ",
        "withdrawalAmount": " 13.14 "
      },]
    },
    {
      determination: '300600093', total: 57.71, data: [{
        "docDate": "11.04.2019",
        "reference": "8800105940",
        "determination": "300600093",
        "disbursementUnit": "300600014",
        "debit": " 57.71 ",
        "credit": " -   ",
        "withdrawalAmount": " 57.71 "
      },]
    },
    {
      determination: '300600097', total: 325.09, data: [
        {
          "docDate": "05.04.2019",
          "reference": "8800102264",
          "determination": "300600097",
          "disbursementUnit": "300600014",
          "debit": " 47.46 ",
          "credit": " -   ",
          "withdrawalAmount": " 47.46 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105890",
          "determination": "300600097",
          "disbursementUnit": "300600014",
          "debit": " 71.18 ",
          "credit": " -   ",
          "withdrawalAmount": " 71.18 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105897",
          "determination": "300600097",
          "disbursementUnit": "300600014",
          "debit": " 47.46 ",
          "credit": " -   ",
          "withdrawalAmount": " 47.46 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111565",
          "determination": "300600097",
          "disbursementUnit": "300600014",
          "debit": " 47.46 ",
          "credit": " -   ",
          "withdrawalAmount": " 47.46 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111572",
          "determination": "300600097",
          "disbursementUnit": "300600014",
          "debit": " 35.59 ",
          "credit": " -   ",
          "withdrawalAmount": " 35.59 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111580",
          "determination": "300600097",
          "disbursementUnit": "300600014",
          "debit": " 28.48 ",
          "credit": " -   ",
          "withdrawalAmount": " 28.48 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113531",
          "determination": "300600097",
          "disbursementUnit": "300600014",
          "debit": " 47.46 ",
          "credit": " -   ",
          "withdrawalAmount": " 47.46 "
        },]
    },
    {
      determination: '300600098', total: 236.40, data: [{
        "docDate": "04.04.2019",
        "reference": "8800100934",
        "determination": "300600098",
        "disbursementUnit": "300600014",
        "debit": " 33.49 ",
        "credit": " -   ",
        "withdrawalAmount": " 33.49 "
      },
      {
        "docDate": "11.04.2019",
        "reference": "8800105903",
        "determination": "300600098",
        "disbursementUnit": "300600014",
        "debit": " 169.42 ",
        "credit": " -   ",
        "withdrawalAmount": " 169.42 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800108871",
        "determination": "300600098",
        "disbursementUnit": "300600014",
        "debit": " 33.49 ",
        "credit": " -   ",
        "withdrawalAmount": " 33.49 "
      },]
    },
    {
      determination: '300600101', total: 124.52, data: [
        {
          "docDate": "03.04.2019",
          "reference": "8800100429",
          "determination": "300600101",
          "disbursementUnit": "300600014",
          "debit": " 124.52 ",
          "credit": " -   ",
          "withdrawalAmount": " 124.52 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100429",
          "determination": "300600101",
          "disbursementUnit": "300600014",
          "debit": " 124.52 ",
          "credit": " -   ",
          "withdrawalAmount": " 124.52 "
        },]
    },
    {
      determination: '300600108', total: 977.34, data: [
        {
          "docDate": "03.04.2019",
          "reference": "8800100484",
          "determination": "300600108",
          "disbursementUnit": "300600014",
          "debit": " 44.32 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.32 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100491",
          "determination": "300600108",
          "disbursementUnit": "300600014",
          "debit": " 29.55 ",
          "credit": " -   ",
          "withdrawalAmount": " 29.55 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103125",
          "determination": "300600108",
          "disbursementUnit": "300600014",
          "debit": " 59.10 ",
          "credit": " -   ",
          "withdrawalAmount": " 59.10 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108904",
          "determination": "300600108",
          "disbursementUnit": "300600014",
          "debit": " 29.55 ",
          "credit": " -   ",
          "withdrawalAmount": " 29.55 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110653",
          "determination": "300600108",
          "disbursementUnit": "300600014",
          "debit": " 814.82 ",
          "credit": " -   ",
          "withdrawalAmount": " 814.82 "
        },]
    },
    {
      determination: '300600112', total: 1232.43, data: [{
        "docDate": "10.04.2019",
        "reference": "8800103977",
        "determination": "300600112",
        "disbursementUnit": "300600014",
        "debit": " 774.37 ",
        "credit": " -   ",
        "withdrawalAmount": " 774.37 "
      },
      {
        "docDate": "22.04.2019",
        "reference": "8800108363",
        "determination": "300600112",
        "disbursementUnit": "300600014",
        "debit": " 428.18 ",
        "credit": " -   ",
        "withdrawalAmount": " 428.18 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800110669",
        "determination": "300600112",
        "disbursementUnit": "300600014",
        "debit": " 29.88 ",
        "credit": " -   ",
        "withdrawalAmount": " 29.88 "
      },]
    },
    {
      determination: '300600113', total: 107.27, data: [

        {
          "docDate": "10.04.2019",
          "reference": "8800103996",
          "determination": "300600113",
          "disbursementUnit": "300600014",
          "debit": " 107.27 ",
          "credit": " -   ",
          "withdrawalAmount": " 107.27 "
        },]
    },
    {
      determination: '300600114', total: 344.27, data: [{
        "docDate": "03.04.2019",
        "reference": "8800100508",
        "determination": "300600114",
        "disbursementUnit": "300600014",
        "debit": " 198.52 ",
        "credit": " -   ",
        "withdrawalAmount": " 198.52 "
      },
      {
        "docDate": "10.04.2019",
        "reference": "8800104008",
        "determination": "300600114",
        "disbursementUnit": "300600014",
        "debit": " 145.75 ",
        "credit": " -   ",
        "withdrawalAmount": " 145.75 "
      },]
    },
    {
      determination: '300600116', total: 30.05, data: [
        {
          "docDate": "09.04.2019",
          "reference": "8800103150",
          "determination": "300600116",
          "disbursementUnit": "300600014",
          "debit": " 30.05 ",
          "credit": " -   ",
          "withdrawalAmount": " 30.05 "
        },]
    },
    {
      determination: '300600122', total: 930.82, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800099516",
          "determination": "300600122",
          "disbursementUnit": "300600014",
          "debit": " 465.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 465.41 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112527",
          "determination": "300600122",
          "disbursementUnit": "300600014",
          "debit": " 465.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 465.41 "
        },]
    },
    {
      determination: '300600123', total: 232.57, data: [
        {
          "docDate": "09.04.2019",
          "reference": "8800103180",
          "determination": "300600123",
          "disbursementUnit": "300600014",
          "debit": " 232.57 ",
          "credit": " -   ",
          "withdrawalAmount": " 232.57 "
        },]
    },
    {
      determination: '300600124', total: 7998.58, data: [
        {
          "docDate": "05.04.2019",
          "reference": "8800102398",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 248.56 ",
          "credit": " -   ",
          "withdrawalAmount": " 248.56 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102406",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 183.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 183.65 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102416",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 1,119.76 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,119.76 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106056",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 62.82 ",
          "credit": " -   ",
          "withdrawalAmount": " 62.82 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106064",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 219.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 219.41 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106072",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 36.94 ",
          "credit": " -   ",
          "withdrawalAmount": " 36.94 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106081",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 524.83 ",
          "credit": " -   ",
          "withdrawalAmount": " 524.83 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108428",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 133.47 ",
          "credit": " -   ",
          "withdrawalAmount": " 133.47 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108435",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 271.12 ",
          "credit": " -   ",
          "withdrawalAmount": " 271.12 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110721",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 203.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 203.65 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110729",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 4,432.50 ",
          "credit": " -   ",
          "withdrawalAmount": " 4,432.50 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113676",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 244.87 ",
          "credit": " -   ",
          "withdrawalAmount": " 244.87 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113684",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 138.15 ",
          "credit": " -   ",
          "withdrawalAmount": " 138.15 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113692",
          "determination": "300600124",
          "disbursementUnit": "300600014",
          "debit": " 178.85 ",
          "credit": " -   ",
          "withdrawalAmount": " 178.85 "
        },]
    },
    {
      determination: '300600127', total: 5739.28, data: [
        {
          "docDate": "02.04.2019",
          "reference": "8800100138",
          "determination": "300600127",
          "disbursementUnit": "300600014",
          "debit": " 511.94 ",
          "credit": " -   ",
          "withdrawalAmount": " 511.94 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103187",
          "determination": "300600127",
          "disbursementUnit": "300600014",
          "debit": " 879.10 ",
          "credit": " -   ",
          "withdrawalAmount": " 879.10 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103196",
          "determination": "300600127",
          "disbursementUnit": "300600014",
          "debit": " 1,385.15 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,385.15 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800106988",
          "determination": "300600127",
          "disbursementUnit": "300600014",
          "debit": " 1,772.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,772.99 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111658",
          "determination": "300600127",
          "disbursementUnit": "300600014",
          "debit": " 44.32 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.32 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111667",
          "determination": "300600127",
          "disbursementUnit": "300600014",
          "debit": " 547.40 ",
          "credit": " -   ",
          "withdrawalAmount": " 547.40 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111676",
          "determination": "300600127",
          "disbursementUnit": "300600014",
          "debit": " 598.38 ",
          "credit": " -   ",
          "withdrawalAmount": " 598.38 "
        },]
    },
    {
      determination: '300600132', total: 492.48, data: [{
        "docDate": "19.04.2019",
        "reference": "8800107654",
        "determination": "300600132",
        "disbursementUnit": "300600014",
        "debit": " 492.48 ",
        "credit": " -   ",
        "withdrawalAmount": " 492.48 "
      },]
    },
    {
      determination: '300600133', total: 5367.65, data: [
        {
          "docDate": "02.04.2019",
          "reference": "8800100093",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 407.04 ",
          "credit": " -   ",
          "withdrawalAmount": " 407.04 "
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100098",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 1,395.28 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,395.28 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102339",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 56.32 ",
          "credit": " -   ",
          "withdrawalAmount": " 56.32 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102345",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 16.25 ",
          "credit": " -   ",
          "withdrawalAmount": " 16.25 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102350",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 634.12 ",
          "credit": " -   ",
          "withdrawalAmount": " 634.12 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104712",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 59.57 ",
          "credit": " -   ",
          "withdrawalAmount": " 59.57 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104717",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 379.64 ",
          "credit": " -   ",
          "withdrawalAmount": " 379.64 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104723",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 289.07 ",
          "credit": " -   ",
          "withdrawalAmount": " 289.07 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104728",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 701.75 ",
          "credit": " -   ",
          "withdrawalAmount": " 701.75 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104736",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 457.97 ",
          "credit": " -   ",
          "withdrawalAmount": " 457.97 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107662",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 674.72 ",
          "credit": " -   ",
          "withdrawalAmount": " 674.72 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107668",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 36.94 ",
          "credit": " -   ",
          "withdrawalAmount": " 36.94 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108396",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 7.39 ",
          "credit": " -   ",
          "withdrawalAmount": " 7.39 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800109825",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 81.26 ",
          "credit": " -   ",
          "withdrawalAmount": " 81.26 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800109830",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 22.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 22.16 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112501",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 22.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 22.16 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112507",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 107.00 ",
          "credit": " -   ",
          "withdrawalAmount": " 107.00 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112512",
          "determination": "300600133",
          "disbursementUnit": "300600014",
          "debit": " 19.01 ",
          "credit": " -   ",
          "withdrawalAmount": " 19.01 "
        },]
    },
    {
      determination: '300600134', total: 295.50, data: [
        {
          "docDate": "05.04.2019",
          "reference": "8800102363",
          "determination": "300600134",
          "disbursementUnit": "300600014",
          "debit": " 147.75 ",
          "credit": " -   ",
          "withdrawalAmount": " 147.75 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102369",
          "determination": "300600134",
          "disbursementUnit": "300600014",
          "debit": " 147.75 ",
          "credit": " -   ",
          "withdrawalAmount": " 147.75 "
        },]
    },
    {
      determination: '300600136', total: 2267.47, data: [
        {
          "docDate": "11.04.2019",
          "reference": "8800104764",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 179.31 ",
          "credit": " -   ",
          "withdrawalAmount": " 179.31 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104770",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 84.22 ",
          "credit": " -   ",
          "withdrawalAmount": " 84.22 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104777",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 130.76 ",
          "credit": " -   ",
          "withdrawalAmount": " 130.76 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104784",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 632.82 ",
          "credit": " -   ",
          "withdrawalAmount": " 632.82 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104791",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 42.11 ",
          "credit": " -   ",
          "withdrawalAmount": " 42.11 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104797",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 475.15 ",
          "credit": " -   ",
          "withdrawalAmount": " 475.15 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800109855",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 512.55 ",
          "credit": " -   ",
          "withdrawalAmount": " 512.55 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800109860",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 42.11 ",
          "credit": " -   ",
          "withdrawalAmount": " 42.11 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800109867",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 42.11 ",
          "credit": " -   ",
          "withdrawalAmount": " 42.11 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800109875",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 42.11 ",
          "credit": " -   ",
          "withdrawalAmount": " 42.11 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113653",
          "determination": "300600136",
          "disbursementUnit": "300600014",
          "debit": " 84.22 ",
          "credit": " -   ",
          "withdrawalAmount": " 84.22 "
        },]
    },
    {
      determination: '300600138', total: 228.92, data: [
        {
          "docDate": "05.04.2019",
          "reference": "8800102391",
          "determination": "300600138",
          "disbursementUnit": "300600014",
          "debit": " 228.92 ",
          "credit": " -   ",
          "withdrawalAmount": " 228.92 "
        },]
    },
    {
      determination: '300600141', total: 104.74, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800101116",
          "determination": "300600141",
          "disbursementUnit": "300600014",
          "debit": " 40.42 ",
          "credit": " -   ",
          "withdrawalAmount": " 40.42 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111644",
          "determination": "300600141",
          "disbursementUnit": "300600014",
          "debit": " 64.32 ",
          "credit": " -   ",
          "withdrawalAmount": " 64.32 "
        },]
    },
    {
      determination: '300600142', total: 73.87, data: [
        {
          "docDate": "22.04.2019",
          "reference": "8800108419",
          "determination": "300600142",
          "disbursementUnit": "300600014",
          "debit": " 73.87 ",
          "credit": " -   ",
          "withdrawalAmount": " 73.87 "
        },]
    },
    {
      determination: '300600144', total: 183.84, data: [{
        "docDate": "03.04.2019",
        "reference": "8800100461",
        "determination": "300600144",
        "disbursementUnit": "300600014",
        "debit": " 91.92 ",
        "credit": " -   ",
        "withdrawalAmount": " 91.92 "
      },
      {
        "docDate": "29.04.2019",
        "reference": "8800112482",
        "determination": "300600144",
        "disbursementUnit": "300600014",
        "debit": " 91.92 ",
        "credit": " -   ",
        "withdrawalAmount": " 91.92 "
      },]
    },
    {
      determination: '300600145', total: 103.79, data: [
        {
          "docDate": "11.04.2019",
          "reference": "8800094390",
          "determination": "300600145",
          "disbursementUnit": "300600014",
          "debit": " 103.79 ",
          "credit": " -   ",
          "withdrawalAmount": " 103.79 "
        },]
    },
    {
      determination: '300600300', total: 849.58, data: [
        {
          "docDate": "24.04.2019",
          "reference": "8800109896",
          "determination": "300600300",
          "disbursementUnit": "300600014",
          "debit": " 377.53 ",
          "credit": " -   ",
          "withdrawalAmount": " 377.53 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110006",
          "determination": "300600300",
          "disbursementUnit": "300600014",
          "debit": " 396.33 ",
          "credit": " -   ",
          "withdrawalAmount": " 396.33 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113711",
          "determination": "300600300",
          "disbursementUnit": "300600014",
          "debit": " 75.72 ",
          "credit": " -   ",
          "withdrawalAmount": " 75.72 "
        },]
    },
    {
      determination: '300600150', total: 3297.44, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800101144",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 197.69 ",
          "credit": " -   ",
          "withdrawalAmount": " 197.69 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101153",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 218.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 218.84 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103212",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 454.33 ",
          "credit": " -   ",
          "withdrawalAmount": " 454.33 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103219",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 126.43 ",
          "credit": " -   ",
          "withdrawalAmount": " 126.43 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104058",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 332.88 ",
          "credit": " -   ",
          "withdrawalAmount": " 332.88 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104814",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 272.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 272.16 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106093",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 87.20 ",
          "credit": " -   ",
          "withdrawalAmount": " 87.20 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107013",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 174.00 ",
          "credit": " -   ",
          "withdrawalAmount": " 174.00 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108448",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 41.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 41.99 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108455",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 45.00 ",
          "credit": " -   ",
          "withdrawalAmount": " 45.00 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110012",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 356.66 ",
          "credit": " -   ",
          "withdrawalAmount": " 356.66 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110019",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 259.35 ",
          "credit": " -   ",
          "withdrawalAmount": " 259.35 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111697",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 525.25 ",
          "credit": " -   ",
          "withdrawalAmount": " 525.25 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111704",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 22.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 22.16 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113717",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 176.85 ",
          "credit": " -   ",
          "withdrawalAmount": " 176.85 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113723",
          "determination": "300600150",
          "disbursementUnit": "300600014",
          "debit": " 6.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 6.65 "
        },]
    },
    {
      determination: '300600151', total: 3591.35, data: [
        {
          "docDate": "03.04.2019",
          "reference": "8800100554",
          "determination": "300600151",
          "disbursementUnit": "300600014",
          "debit": " 947.34 ",
          "credit": " -   ",
          "withdrawalAmount": " 947.34 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100562",
          "determination": "300600151",
          "disbursementUnit": "300600014",
          "debit": " 762.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 762.60 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102431",
          "determination": "300600151",
          "disbursementUnit": "300600014",
          "debit": " 224.29 ",
          "credit": " -   ",
          "withdrawalAmount": " 224.29 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104823",
          "determination": "300600151",
          "disbursementUnit": "300600014",
          "debit": " 356.24 ",
          "credit": " -   ",
          "withdrawalAmount": " 356.24 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104832",
          "determination": "300600151",
          "disbursementUnit": "300600014",
          "debit": " 89.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 89.71 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108462",
          "determination": "300600151",
          "disbursementUnit": "300600014",
          "debit": " 448.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 448.60 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110027",
          "determination": "300600151",
          "disbursementUnit": "300600014",
          "debit": " 403.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 403.71 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112553",
          "determination": "300600151",
          "disbursementUnit": "300600014",
          "debit": " 44.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.86 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112562",
          "determination": "300600151",
          "disbursementUnit": "300600014",
          "debit": " 314.00 ",
          "credit": " -   ",
          "withdrawalAmount": " 314.00 "
        },]
    },
    {
      determination: '300600152', total: 2997.17, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800101168",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 205.30 ",
          "credit": " -   ",
          "withdrawalAmount": " 205.30 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101177",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 44.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.86 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104077",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 84.29 ",
          "credit": " -   ",
          "withdrawalAmount": " 84.29 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104083",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 251.96 ",
          "credit": " -   ",
          "withdrawalAmount": " 251.96 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104089",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 685.67 ",
          "credit": " -   ",
          "withdrawalAmount": " 685.67 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111719",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 300.55 ",
          "credit": " -   ",
          "withdrawalAmount": " 300.55 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111726",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 431.34 ",
          "credit": " -   ",
          "withdrawalAmount": " 431.34 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111733",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 44.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.86 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111739",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 83.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 83.99 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111745",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 125.63 ",
          "credit": " -   ",
          "withdrawalAmount": " 125.63 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111751",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 545.15 ",
          "credit": " -   ",
          "withdrawalAmount": " 545.15 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111757",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 41.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 41.99 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111763",
          "determination": "300600152",
          "disbursementUnit": "300600014",
          "debit": " 151.58 ",
          "credit": " -   ",
          "withdrawalAmount": " 151.58 "
        },]
    },
    {
      determination: '300600153', total: 15019.72, data: [
        {
          "docDate": "02.04.2019",
          "reference": "8800100158",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 788.00 ",
          "credit": " -   ",
          "withdrawalAmount": " 788.00 "
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100164",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 895.67 ",
          "credit": " -   ",
          "withdrawalAmount": " 895.67 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100575",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 1,205.18 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,205.18 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101183",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 425.26 ",
          "credit": " -   ",
          "withdrawalAmount": " 425.26 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102447",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 556.33 ",
          "credit": " -   ",
          "withdrawalAmount": " 556.33 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103234",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 825.81 ",
          "credit": " -   ",
          "withdrawalAmount": " 825.81 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104096",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 2,444.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,444.84 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104850",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 719.49 ",
          "credit": " -   ",
          "withdrawalAmount": " 719.49 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106108",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 1,085.66 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,085.66 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107708",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 479.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 479.86 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108976",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 463.63 ",
          "credit": " -   ",
          "withdrawalAmount": " 463.63 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108982",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 1,657.69 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,657.69 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110043",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 729.27 ",
          "credit": " -   ",
          "withdrawalAmount": " 729.27 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110747",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 343.94 ",
          "credit": " -   ",
          "withdrawalAmount": " 343.94 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111771",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 795.94 ",
          "credit": " -   ",
          "withdrawalAmount": " 795.94 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112588",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 655.00 ",
          "credit": " -   ",
          "withdrawalAmount": " 655.00 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113729",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 0.03 ",
          "credit": " -   ",
          "withdrawalAmount": " 0.03 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113734",
          "determination": "300600153",
          "disbursementUnit": "300600014",
          "debit": " 948.12 ",
          "credit": " -   ",
          "withdrawalAmount": " 948.12 "
        },]
    },
    {
      determination: '300600154', total: 4199.58, data: [
        {
          "docDate": "02.04.2019",
          "reference": "8800100171",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 414.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 414.78 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100583",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 179.43 ",
          "credit": " -   ",
          "withdrawalAmount": " 179.43 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101190",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 224.28 ",
          "credit": " -   ",
          "withdrawalAmount": " 224.28 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102453",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 254.45 ",
          "credit": " -   ",
          "withdrawalAmount": " 254.45 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103242",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 179.43 ",
          "credit": " -   ",
          "withdrawalAmount": " 179.43 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104103",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 542.20 ",
          "credit": " -   ",
          "withdrawalAmount": " 542.20 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104857",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 89.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 89.71 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106115",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 801.47 ",
          "credit": " -   ",
          "withdrawalAmount": " 801.47 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108483",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 269.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 269.16 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108989",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 273.45 ",
          "credit": " -   ",
          "withdrawalAmount": " 273.45 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110048",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 89.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 89.71 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110753",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 44.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.86 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111779",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 343.22 ",
          "credit": " -   ",
          "withdrawalAmount": " 343.22 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112593",
          "determination": "300600154",
          "disbursementUnit": "300600014",
          "debit": " 493.43 ",
          "credit": " -   ",
          "withdrawalAmount": " 493.43 "
        },]
    },
    {
      determination: '300600155', total: 4412.00, data: [
        {
          "docDate": "02.04.2019",
          "reference": "8800100148",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 300.95 ",
          "credit": " -   ",
          "withdrawalAmount": " 300.95 "
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100153",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 314.30 ",
          "credit": " -   ",
          "withdrawalAmount": " 314.30 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100569",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 229.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 229.86 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101161",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 352.85 ",
          "credit": " -   ",
          "withdrawalAmount": " 352.85 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102441",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 44.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.86 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103227",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 89.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 89.71 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104064",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 125.54 ",
          "credit": " -   ",
          "withdrawalAmount": " 125.54 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104069",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 692.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 692.60 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104838",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 89.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 89.71 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104843",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 44.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.86 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106101",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 170.40 ",
          "credit": " -   ",
          "withdrawalAmount": " 170.40 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107019",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 222.56 ",
          "credit": " -   ",
          "withdrawalAmount": " 222.56 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107697",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 44.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.86 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107702",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 146.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 146.16 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108473",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 141.87 ",
          "credit": " -   ",
          "withdrawalAmount": " 141.87 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108478",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 104.32 ",
          "credit": " -   ",
          "withdrawalAmount": " 104.32 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108971",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 565.09 ",
          "credit": " -   ",
          "withdrawalAmount": " 565.09 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110037",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 44.86 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.86 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110741",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 209.24 ",
          "credit": " -   ",
          "withdrawalAmount": " 209.24 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111712",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 209.98 ",
          "credit": " -   ",
          "withdrawalAmount": " 209.98 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112568",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 125.54 ",
          "credit": " -   ",
          "withdrawalAmount": " 125.54 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112574",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 89.72 ",
          "credit": " -   ",
          "withdrawalAmount": " 89.72 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112580",
          "determination": "300600155",
          "disbursementUnit": "300600014",
          "debit": " 52.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 52.16 "
        },]
    },
    {
      determination: '300600157', total: 10905.51, data: [
        {
          "docDate": "03.04.2019",
          "reference": "8800100589",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 608.14 ",
          "credit": " -   ",
          "withdrawalAmount": " 608.14 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100595",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 503.01 ",
          "credit": " -   ",
          "withdrawalAmount": " 503.01 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102460",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 470.42 ",
          "credit": " -   ",
          "withdrawalAmount": " 470.42 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102467",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 1,114.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,114.99 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104110",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 769.19 ",
          "credit": " -   ",
          "withdrawalAmount": " 769.19 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104119",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 2,041.94 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,041.94 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106124",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 682.30 ",
          "credit": " -   ",
          "withdrawalAmount": " 682.30 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106131",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 329.68 ",
          "credit": " -   ",
          "withdrawalAmount": " 329.68 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107715",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 119.56 ",
          "credit": " -   ",
          "withdrawalAmount": " 119.56 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107721",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 126.27 ",
          "credit": " -   ",
          "withdrawalAmount": " 126.27 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800108998",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 526.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 526.99 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109005",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 864.46 ",
          "credit": " -   ",
          "withdrawalAmount": " 864.46 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110760",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 724.59 ",
          "credit": " -   ",
          "withdrawalAmount": " 724.59 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110766",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 367.05 ",
          "credit": " -   ",
          "withdrawalAmount": " 367.05 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112599",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 871.64 ",
          "credit": " -   ",
          "withdrawalAmount": " 871.64 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112606",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 605.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 605.65 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113743",
          "determination": "300600157",
          "disbursementUnit": "300600014",
          "debit": " 179.63 ",
          "credit": " -   ",
          "withdrawalAmount": " 179.63 "
        },]
    },
    {
      determination: '300600158', total: 10101.09, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800101237",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 905.88 ",
          "credit": " -   ",
          "withdrawalAmount": " 905.88 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101243",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 179.64 ",
          "credit": " -   ",
          "withdrawalAmount": " 179.64 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104167",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 344.24 ",
          "credit": " -   ",
          "withdrawalAmount": " 344.24 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104174",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 337.29 ",
          "credit": " -   ",
          "withdrawalAmount": " 337.29 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104181",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 1,315.89 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,315.89 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107049",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 3,107.56 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,107.56 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107056",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 196.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 196.84 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107062",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 238.82 ",
          "credit": " -   ",
          "withdrawalAmount": " 238.82 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109059",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 265.31 ",
          "credit": " -   ",
          "withdrawalAmount": " 265.31 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109065",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 537.73 ",
          "credit": " -   ",
          "withdrawalAmount": " 537.73 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109071",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 603.35 ",
          "credit": " -   ",
          "withdrawalAmount": " 603.35 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111821",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 350.27 ",
          "credit": " -   ",
          "withdrawalAmount": " 350.27 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111829",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 418.76 ",
          "credit": " -   ",
          "withdrawalAmount": " 418.76 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111836",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 478.24 ",
          "credit": " -   ",
          "withdrawalAmount": " 478.24 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113779",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 450.05 ",
          "credit": " -   ",
          "withdrawalAmount": " 450.05 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113785",
          "determination": "300600158",
          "disbursementUnit": "300600014",
          "debit": " 371.22 ",
          "credit": " -   ",
          "withdrawalAmount": " 371.22 "
        },]
    },
    {
      determination: '300600159', total: 11161.86, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800101196",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 684.67 ",
          "credit": " -   ",
          "withdrawalAmount": " 684.67 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101203",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 1,037.70 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,037.70 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101209",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 817.01 ",
          "credit": " -   ",
          "withdrawalAmount": " 817.01 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104126",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 1,095.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,095.78 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104133",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 469.73 ",
          "credit": " -   ",
          "withdrawalAmount": " 469.73 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104140",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 1,641.83 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,641.83 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800109013",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 737.93 ",
          "credit": " -   ",
          "withdrawalAmount": " 737.93 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800109020",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 1,356.32 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,356.32 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800109027",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 599.20 ",
          "credit": " -   ",
          "withdrawalAmount": " 599.20 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109035",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 577.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 577.84 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109043",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 474.36 ",
          "credit": " -   ",
          "withdrawalAmount": " 474.36 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111786",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 195.89 ",
          "credit": " -   ",
          "withdrawalAmount": " 195.89 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111792",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 210.82 ",
          "credit": " -   ",
          "withdrawalAmount": " 210.82 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113752",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 658.85 ",
          "credit": " -   ",
          "withdrawalAmount": " 658.85 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113760",
          "determination": "300600159",
          "disbursementUnit": "300600014",
          "debit": " 603.93 ",
          "credit": " -   ",
          "withdrawalAmount": " 603.93 "
        },]
    },
    {
      determination: '300600160', total: 14772.98, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800101215",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 1,223.01 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,223.01 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101221",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 3,650.99 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,650.99 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101228",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 537.52 ",
          "credit": " -   ",
          "withdrawalAmount": " 537.52 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104146",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 248.48 ",
          "credit": " -   ",
          "withdrawalAmount": " 248.48 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104153",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 180.05 ",
          "credit": " -   ",
          "withdrawalAmount": " 180.05 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104160",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 2,057.94 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,057.94 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107030",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 473.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 473.84 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107037",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 544.90 ",
          "credit": " -   ",
          "withdrawalAmount": " 544.90 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107043",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 210.61 ",
          "credit": " -   ",
          "withdrawalAmount": " 210.61 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109053",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 3,123.32 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,123.32 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111800",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 157.94 ",
          "credit": " -   ",
          "withdrawalAmount": " 157.94 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111807",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 263.26 ",
          "credit": " -   ",
          "withdrawalAmount": " 263.26 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111814",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 105.30 ",
          "credit": " -   ",
          "withdrawalAmount": " 105.30 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113767",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 769.34 ",
          "credit": " -   ",
          "withdrawalAmount": " 769.34 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113773",
          "determination": "300600160",
          "disbursementUnit": "300600014",
          "debit": " 1,226.48 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,226.48 "
        },]
    },
    {
      determination: '300600162', total: 7924.46, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800101257",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 138.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 138.60 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104188",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 207.45 ",
          "credit": " -   ",
          "withdrawalAmount": " 207.45 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104200",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 985.17 ",
          "credit": " -   ",
          "withdrawalAmount": " 985.17 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106138",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 708.19 ",
          "credit": " -   ",
          "withdrawalAmount": " 708.19 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106143",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 893.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 893.60 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108493",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 283.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 283.16 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108500",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 178.83 ",
          "credit": " -   ",
          "withdrawalAmount": " 178.83 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110774",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 1,064.39 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,064.39 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110781",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 1,077.82 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,077.82 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110788",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 559.47 ",
          "credit": " -   ",
          "withdrawalAmount": " 559.47 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113790",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 419.22 ",
          "credit": " -   ",
          "withdrawalAmount": " 419.22 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113798",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 564.96 ",
          "credit": " -   ",
          "withdrawalAmount": " 564.96 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113805",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 59.61 ",
          "credit": " -   ",
          "withdrawalAmount": " 59.61 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113810",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 387.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 387.78 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113815",
          "determination": "300600162",
          "disbursementUnit": "300600014",
          "debit": " 396.21 ",
          "credit": " -   ",
          "withdrawalAmount": " 396.21 "
        },]
    },
    {
      determination: '300600163', total: 10590.45, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800101263",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 2,394.11 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,394.11 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101269",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 185.72 ",
          "credit": " -   ",
          "withdrawalAmount": " 185.72 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101276",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 1,191.85 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,191.85 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104206",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 59.61 ",
          "credit": " -   ",
          "withdrawalAmount": " 59.61 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104213",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 223.50 ",
          "credit": " -   ",
          "withdrawalAmount": " 223.50 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104220",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 1,572.90 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,572.90 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104226",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 52.30 ",
          "credit": " -   ",
          "withdrawalAmount": " 52.30 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107069",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 105.36 ",
          "credit": " -   ",
          "withdrawalAmount": " 105.36 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107076",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 342.27 ",
          "credit": " -   ",
          "withdrawalAmount": " 342.27 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107082",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 283.35 ",
          "credit": " -   ",
          "withdrawalAmount": " 283.35 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110055",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 59.55 ",
          "credit": " -   ",
          "withdrawalAmount": " 59.55 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110061",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 178.85 ",
          "credit": " -   ",
          "withdrawalAmount": " 178.85 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110068",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 537.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 537.60 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110074",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 587.63 ",
          "credit": " -   ",
          "withdrawalAmount": " 587.63 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113822",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 483.39 ",
          "credit": " -   ",
          "withdrawalAmount": " 483.39 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113829",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 417.02 ",
          "credit": " -   ",
          "withdrawalAmount": " 417.02 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113835",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 1,355.95 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,355.95 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113842",
          "determination": "300600163",
          "disbursementUnit": "300600014",
          "debit": " 559.49 ",
          "credit": " -   ",
          "withdrawalAmount": " 559.49 "
        },]
    },
    {
      determination: '300600164', total: 7439.05, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800099529",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 169.10 ",
          "credit": " -   ",
          "withdrawalAmount": " 169.10 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102477",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 298.08 ",
          "credit": " -   ",
          "withdrawalAmount": " 298.08 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102487",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 298.08 ",
          "credit": " -   ",
          "withdrawalAmount": " 298.08 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104865",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 178.69 ",
          "credit": " -   ",
          "withdrawalAmount": " 178.69 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104873",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 223.24 ",
          "credit": " -   ",
          "withdrawalAmount": " 223.24 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104880",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 654.90 ",
          "credit": " -   ",
          "withdrawalAmount": " 654.90 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107728",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 513.88 ",
          "credit": " -   ",
          "withdrawalAmount": " 513.88 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107734",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 1,423.47 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,423.47 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107742",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 655.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 655.78 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110079",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 357.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 357.41 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110085",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 908.97 ",
          "credit": " -   ",
          "withdrawalAmount": " 908.97 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110091",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 238.46 ",
          "credit": " -   ",
          "withdrawalAmount": " 238.46 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112614",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 417.02 ",
          "credit": " -   ",
          "withdrawalAmount": " 417.02 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112620",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 59.46 ",
          "credit": " -   ",
          "withdrawalAmount": " 59.46 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112625",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 290.62 ",
          "credit": " -   ",
          "withdrawalAmount": " 290.62 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113849",
          "determination": "300600164",
          "disbursementUnit": "300600014",
          "debit": " 751.89 ",
          "credit": " -   ",
          "withdrawalAmount": " 751.89 "
        },]
    },
    {
      determination: '300600166', total: 8687.78, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800099535",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 607.43 ",
          "credit": " -   ",
          "withdrawalAmount": " 607.43 "
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100177",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 316.03 ",
          "credit": " -   ",
          "withdrawalAmount": " 316.03 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100601",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 596.59 ",
          "credit": " -   ",
          "withdrawalAmount": " 596.59 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101285",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 286.02 ",
          "credit": " -   ",
          "withdrawalAmount": " 286.02 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102493",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 240.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 240.84 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103248",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 582.54 ",
          "credit": " -   ",
          "withdrawalAmount": " 582.54 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104233",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 883.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 883.65 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800111843",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 883.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 883.65 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800114000",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " -   ",
          "credit": " 883.65 ",
          "withdrawalAmount": " (883.65)"
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104887",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 1,166.67 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,166.67 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106149",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 380.33 ",
          "credit": " -   ",
          "withdrawalAmount": " 380.33 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107088",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 451.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 451.65 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107748",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 238.26 ",
          "credit": " -   ",
          "withdrawalAmount": " 238.26 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108506",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 105.12 ",
          "credit": " -   ",
          "withdrawalAmount": " 105.12 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109078",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 658.59 ",
          "credit": " -   ",
          "withdrawalAmount": " 658.59 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110096",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 526.37 ",
          "credit": " -   ",
          "withdrawalAmount": " 526.37 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110795",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 586.10 ",
          "credit": " -   ",
          "withdrawalAmount": " 586.10 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111849",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 451.67 ",
          "credit": " -   ",
          "withdrawalAmount": " 451.67 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112633",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 303.00 ",
          "credit": " -   ",
          "withdrawalAmount": " 303.00 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113857",
          "determination": "300600166",
          "disbursementUnit": "300600014",
          "debit": " 306.92 ",
          "credit": " -   ",
          "withdrawalAmount": " 306.92 "
        },]
    },
    {
      determination: '300600167', total: 10006.19, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800099541",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 431.64 ",
          "credit": " -   ",
          "withdrawalAmount": " 431.64 "
        },
        {
          "docDate": "01.04.2019",
          "reference": "8800099546",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 3.61 ",
          "credit": " -   ",
          "withdrawalAmount": " 3.61 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100608",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 847.98 ",
          "credit": " -   ",
          "withdrawalAmount": " 847.98 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100613",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 52.55 ",
          "credit": " -   ",
          "withdrawalAmount": " 52.55 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101291",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 283.28 ",
          "credit": " -   ",
          "withdrawalAmount": " 283.28 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102499",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 465.67 ",
          "credit": " -   ",
          "withdrawalAmount": " 465.67 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103254",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 691.22 ",
          "credit": " -   ",
          "withdrawalAmount": " 691.22 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103260",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 2.22 ",
          "credit": " -   ",
          "withdrawalAmount": " 2.22 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104239",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 1,474.84 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,474.84 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104245",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 525.90 ",
          "credit": " -   ",
          "withdrawalAmount": " 525.90 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104893",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 587.81 ",
          "credit": " -   ",
          "withdrawalAmount": " 587.81 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800104898",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 165.20 ",
          "credit": " -   ",
          "withdrawalAmount": " 165.20 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106155",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 571.36 ",
          "credit": " -   ",
          "withdrawalAmount": " 571.36 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106160",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 278.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 278.41 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107094",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 353.21 ",
          "credit": " -   ",
          "withdrawalAmount": " 353.21 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107099",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 390.35 ",
          "credit": " -   ",
          "withdrawalAmount": " 390.35 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107754",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 99.09 ",
          "credit": " -   ",
          "withdrawalAmount": " 99.09 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108512",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 1.48 ",
          "credit": " -   ",
          "withdrawalAmount": " 1.48 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109083",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 598.55 ",
          "credit": " -   ",
          "withdrawalAmount": " 598.55 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110103",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 186.38 ",
          "credit": " -   ",
          "withdrawalAmount": " 186.38 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110108",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 105.12 ",
          "credit": " -   ",
          "withdrawalAmount": " 105.12 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110802",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 97.79 ",
          "credit": " -   ",
          "withdrawalAmount": " 97.79 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110807",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 25.26 ",
          "credit": " -   ",
          "withdrawalAmount": " 25.26 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111855",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 495.39 ",
          "credit": " -   ",
          "withdrawalAmount": " 495.39 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111860",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 241.63 ",
          "credit": " -   ",
          "withdrawalAmount": " 241.63 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112639",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 323.21 ",
          "credit": " -   ",
          "withdrawalAmount": " 323.21 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112644",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 217.75 ",
          "credit": " -   ",
          "withdrawalAmount": " 217.75 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113863",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 301.93 ",
          "credit": " -   ",
          "withdrawalAmount": " 301.93 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113868",
          "determination": "300600167",
          "disbursementUnit": "300600014",
          "debit": " 187.36 ",
          "credit": " -   ",
          "withdrawalAmount": " 187.36 "
        },]
    },
    {
      determination: '300600169', total: 587768.19, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800099552",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 75,604.98 ",
          "credit": " -   ",
          "withdrawalAmount": " 75,604.98 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101299",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 14,013.38 ",
          "credit": " -   ",
          "withdrawalAmount": " 14,013.38 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101305",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 26,815.34 ",
          "credit": " -   ",
          "withdrawalAmount": " 26,815.34 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101311",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 28,398.57 ",
          "credit": " -   ",
          "withdrawalAmount": " 28,398.57 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104251",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 33,463.68 ",
          "credit": " -   ",
          "withdrawalAmount": " 33,463.68 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104257",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 51,779.57 ",
          "credit": " -   ",
          "withdrawalAmount": " 51,779.57 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104264",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 62,541.09 ",
          "credit": " -   ",
          "withdrawalAmount": " 62,541.09 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107106",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 27,615.53 ",
          "credit": " -   ",
          "withdrawalAmount": " 27,615.53 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107112",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 23,635.66 ",
          "credit": " -   ",
          "withdrawalAmount": " 23,635.66 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107117",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 130.88 ",
          "credit": " -   ",
          "withdrawalAmount": " 130.88 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109089",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 21,224.98 ",
          "credit": " -   ",
          "withdrawalAmount": " 21,224.98 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109096",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 25,947.14 ",
          "credit": " -   ",
          "withdrawalAmount": " 25,947.14 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109103",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 53,008.38 ",
          "credit": " -   ",
          "withdrawalAmount": " 53,008.38 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111866",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 20,365.45 ",
          "credit": " -   ",
          "withdrawalAmount": " 20,365.45 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111872",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 22,647.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 22,647.16 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111879",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 18,479.72 ",
          "credit": " -   ",
          "withdrawalAmount": " 18,479.72 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113875",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 40,120.95 ",
          "credit": " -   ",
          "withdrawalAmount": " 40,120.95 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113882",
          "determination": "300600169",
          "disbursementUnit": "300600014",
          "debit": " 41,975.73 ",
          "credit": " -   ",
          "withdrawalAmount": " 41,975.73 "
        },]
    },
    {
      determination: '300600170', total: 16382.17, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800099558",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 565.68 ",
          "credit": " -   ",
          "withdrawalAmount": " 565.68 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101317",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 1,188.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,188.60 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101323",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 685.56 ",
          "credit": " -   ",
          "withdrawalAmount": " 685.56 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101329",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 1,372.29 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,372.29 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104270",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 589.58 ",
          "credit": " -   ",
          "withdrawalAmount": " 589.58 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104276",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 2,956.43 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,956.43 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104283",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 1,822.29 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,822.29 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107124",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 887.16 ",
          "credit": " -   ",
          "withdrawalAmount": " 887.16 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107131",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 834.54 ",
          "credit": " -   ",
          "withdrawalAmount": " 834.54 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107138",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 163.04 ",
          "credit": " -   ",
          "withdrawalAmount": " 163.04 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109109",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 291.31 ",
          "credit": " -   ",
          "withdrawalAmount": " 291.31 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109116",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 1,090.21 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,090.21 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109122",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 822.82 ",
          "credit": " -   ",
          "withdrawalAmount": " 822.82 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111886",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 395.38 ",
          "credit": " -   ",
          "withdrawalAmount": " 395.38 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111891",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 716.01 ",
          "credit": " -   ",
          "withdrawalAmount": " 716.01 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111898",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 681.17 ",
          "credit": " -   ",
          "withdrawalAmount": " 681.17 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113888",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 644.36 ",
          "credit": " -   ",
          "withdrawalAmount": " 644.36 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113894",
          "determination": "300600170",
          "disbursementUnit": "300600014",
          "debit": " 675.74 ",
          "credit": " -   ",
          "withdrawalAmount": " 675.74 "
        },]
    },
    {
      determination: '300600172', total: 19383.79, data: [{
        "docDate": "04.04.2019",
        "reference": "8800101336",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 4,633.36 ",
        "credit": " -   ",
        "withdrawalAmount": " 4,633.36 "
      },
      {
        "docDate": "04.04.2019",
        "reference": "8800101344",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 176.38 ",
        "credit": " -   ",
        "withdrawalAmount": " 176.38 "
      },
      {
        "docDate": "04.04.2019",
        "reference": "8800101352",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 144.45 ",
        "credit": " -   ",
        "withdrawalAmount": " 144.45 "
      },
      {
        "docDate": "09.04.2019",
        "reference": "8800103266",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 974.77 ",
        "credit": " -   ",
        "withdrawalAmount": " 974.77 "
      },
      {
        "docDate": "09.04.2019",
        "reference": "8800103274",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 820.98 ",
        "credit": " -   ",
        "withdrawalAmount": " 820.98 "
      },
      {
        "docDate": "11.04.2019",
        "reference": "8800105005",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 4,889.21 ",
        "credit": " -   ",
        "withdrawalAmount": " 4,889.21 "
      },
      {
        "docDate": "11.04.2019",
        "reference": "8800105013",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 45.00 ",
        "credit": " -   ",
        "withdrawalAmount": " 45.00 "
      },
      {
        "docDate": "18.04.2019",
        "reference": "8800107146",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 1,184.04 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,184.04 "
      },
      {
        "docDate": "18.04.2019",
        "reference": "8800107151",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 3,444.90 ",
        "credit": " -   ",
        "withdrawalAmount": " 3,444.90 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800109130",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 83.99 ",
        "credit": " -   ",
        "withdrawalAmount": " 83.99 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800109138",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 186.45 ",
        "credit": " -   ",
        "withdrawalAmount": " 186.45 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800110814",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 212.98 ",
        "credit": " -   ",
        "withdrawalAmount": " 212.98 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800110822",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 293.97 ",
        "credit": " -   ",
        "withdrawalAmount": " 293.97 "
      },
      {
        "docDate": "25.04.2019",
        "reference": "8800110827",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 127.03 ",
        "credit": " -   ",
        "withdrawalAmount": " 127.03 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113905",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 1,643.28 ",
        "credit": " -   ",
        "withdrawalAmount": " 1,643.28 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113913",
        "determination": "300600172",
        "disbursementUnit": "300600014",
        "debit": " 523.00 ",
        "credit": " -   ",
        "withdrawalAmount": " 523.00 "
      },]
    },
    {
      determination: '300600173', total: 1868.76, data: [
        {
          "docDate": "03.04.2019",
          "reference": "8800100621",
          "determination": "300600173",
          "disbursementUnit": "300600014",
          "debit": " 44.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.71 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100626",
          "determination": "300600173",
          "disbursementUnit": "300600014",
          "debit": " 215.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 215.78 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104290",
          "determination": "300600173",
          "disbursementUnit": "300600014",
          "debit": " 353.77 ",
          "credit": " -   ",
          "withdrawalAmount": " 353.77 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107157",
          "determination": "300600173",
          "disbursementUnit": "300600014",
          "debit": " 44.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 44.71 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107162",
          "determination": "300600173",
          "disbursementUnit": "300600014",
          "debit": " 376.12 ",
          "credit": " -   ",
          "withdrawalAmount": " 376.12 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110834",
          "determination": "300600173",
          "disbursementUnit": "300600014",
          "debit": " 446.66 ",
          "credit": " -   ",
          "withdrawalAmount": " 446.66 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112650",
          "determination": "300600173",
          "disbursementUnit": "300600014",
          "debit": " 89.42 ",
          "credit": " -   ",
          "withdrawalAmount": " 89.42 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112655",
          "determination": "300600173",
          "disbursementUnit": "300600014",
          "debit": " 145.05 ",
          "credit": " -   ",
          "withdrawalAmount": " 145.05 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112662",
          "determination": "300600173",
          "disbursementUnit": "300600014",
          "debit": " 152.54 ",
          "credit": " -   ",
          "withdrawalAmount": " 152.54 "
        },]
    },
    {
      determination: '300600175', total: 21551.24, data: [
        {
          "docDate": "01.04.2019",
          "reference": "8800099564",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 915.64 ",
          "credit": " -   ",
          "withdrawalAmount": " 915.64 "
        },
        {
          "docDate": "02.04.2019",
          "reference": "8800100184",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 2,574.87 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,574.87 "
        },
        {
          "docDate": "03.04.2019",
          "reference": "8800100635",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 545.30 ",
          "credit": " -   ",
          "withdrawalAmount": " 545.30 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102508",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 960.07 ",
          "credit": " -   ",
          "withdrawalAmount": " 960.07 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102515",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 1,299.61 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,299.61 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103281",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 1,989.95 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,989.95 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104299",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 3,296.09 ",
          "credit": " -   ",
          "withdrawalAmount": " 3,296.09 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105020",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 864.20 ",
          "credit": " -   ",
          "withdrawalAmount": " 864.20 "
        },
        {
          "docDate": "17.04.2019",
          "reference": "8800106166",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 1,252.53 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,252.53 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107171",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 213.12 ",
          "credit": " -   ",
          "withdrawalAmount": " 213.12 "
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107761",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 693.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 693.78 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108522",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 1,210.27 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,210.27 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109145",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 963.51 ",
          "credit": " -   ",
          "withdrawalAmount": " 963.51 "
        },
        {
          "docDate": "24.04.2019",
          "reference": "8800110115",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 971.34 ",
          "credit": " -   ",
          "withdrawalAmount": " 971.34 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110842",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 1,288.44 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,288.44 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111903",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 180.00 ",
          "credit": " -   ",
          "withdrawalAmount": " 180.00 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112669",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 1,097.19 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,097.19 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113922",
          "determination": "300600175",
          "disbursementUnit": "300600014",
          "debit": " 1,235.33 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,235.33 "
        },]
    },
    {
      determination: '300600176', total: 39424.10, data: [
        {
          "docDate": "04.04.2019",
          "reference": "8800101361",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 2,161.03 ",
          "credit": " -   ",
          "withdrawalAmount": " 2,161.03 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101368",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 756.37 ",
          "credit": " -   ",
          "withdrawalAmount": " 756.37 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101373",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 6,037.47 ",
          "credit": " -   ",
          "withdrawalAmount": " 6,037.47 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104305",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 8,935.50 ",
          "credit": " -   ",
          "withdrawalAmount": " 8,935.50 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104312",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 6,428.36 ",
          "credit": " -   ",
          "withdrawalAmount": " 6,428.36 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107178",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 125.98 ",
          "credit": " -   ",
          "withdrawalAmount": " 125.98 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107185",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 45.00 ",
          "credit": " -   ",
          "withdrawalAmount": " 45.00 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107190",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 194.78 ",
          "credit": " -   ",
          "withdrawalAmount": " 194.78 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109150",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 90.01 ",
          "credit": " -   ",
          "withdrawalAmount": " 90.01 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109155",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 4,762.31 ",
          "credit": " -   ",
          "withdrawalAmount": " 4,762.31 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109161",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 154.34 ",
          "credit": " -   ",
          "withdrawalAmount": " 154.34 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111909",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 1,142.18 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,142.18 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111915",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 896.85 ",
          "credit": " -   ",
          "withdrawalAmount": " 896.85 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111921",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 909.03 ",
          "credit": " -   ",
          "withdrawalAmount": " 909.03 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113928",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 529.29 ",
          "credit": " -   ",
          "withdrawalAmount": " 529.29 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113935",
          "determination": "300600176",
          "disbursementUnit": "300600014",
          "debit": " 6,255.60 ",
          "credit": " -   ",
          "withdrawalAmount": " 6,255.60 "
        },]
    },
    {
      determination: '300600177', total: 2582.19, data: [{
        "docDate": "04.04.2019",
        "reference": "8800101379",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 245.24 ",
        "credit": " -   ",
        "withdrawalAmount": " 245.24 "
      },
      {
        "docDate": "04.04.2019",
        "reference": "8800101385",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 156.92 ",
        "credit": " -   ",
        "withdrawalAmount": " 156.92 "
      },
      {
        "docDate": "04.04.2019",
        "reference": "8800101390",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 231.13 ",
        "credit": " -   ",
        "withdrawalAmount": " 231.13 "
      },
      {
        "docDate": "10.04.2019",
        "reference": "8800104317",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 90.00 ",
        "credit": " -   ",
        "withdrawalAmount": " 90.00 "
      },
      {
        "docDate": "10.04.2019",
        "reference": "8800104322",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 104.61 ",
        "credit": " -   ",
        "withdrawalAmount": " 104.61 "
      },
      {
        "docDate": "18.04.2019",
        "reference": "8800107195",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 45.00 ",
        "credit": " -   ",
        "withdrawalAmount": " 45.00 "
      },
      {
        "docDate": "18.04.2019",
        "reference": "8800107200",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 194.62 ",
        "credit": " -   ",
        "withdrawalAmount": " 194.62 "
      },
      {
        "docDate": "18.04.2019",
        "reference": "8800107206",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 59.61 ",
        "credit": " -   ",
        "withdrawalAmount": " 59.61 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800109168",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 424.07 ",
        "credit": " -   ",
        "withdrawalAmount": " 424.07 "
      },
      {
        "docDate": "23.04.2019",
        "reference": "8800109174",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 90.01 ",
        "credit": " -   ",
        "withdrawalAmount": " 90.01 "
      },
      {
        "docDate": "26.04.2019",
        "reference": "8800111928",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 149.62 ",
        "credit": " -   ",
        "withdrawalAmount": " 149.62 "
      },
      {
        "docDate": "26.04.2019",
        "reference": "8800111935",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 239.61 ",
        "credit": " -   ",
        "withdrawalAmount": " 239.61 "
      },
      {
        "docDate": "26.04.2019",
        "reference": "8800111940",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 187.31 ",
        "credit": " -   ",
        "withdrawalAmount": " 187.31 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113940",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 178.83 ",
        "credit": " -   ",
        "withdrawalAmount": " 178.83 "
      },
      {
        "docDate": "30.04.2019",
        "reference": "8800113947",
        "determination": "300600177",
        "disbursementUnit": "300600014",
        "debit": " 185.61 ",
        "credit": " -   ",
        "withdrawalAmount": " 185.61 "
      },]
    },
    {
      determination: '300600179', total: 5062.10, data: [
        {
          "docDate": "03.04.2019",
          "reference": "8800100642",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 88.65 ",
          "credit": " -   ",
          "withdrawalAmount": " 88.65 "
        },
        {
          "docDate": "04.04.2019",
          "reference": "8800101397",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 294.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 294.41 "
        },
        {
          "docDate": "05.04.2019",
          "reference": "8800102523",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 214.59 ",
          "credit": " -   ",
          "withdrawalAmount": " 214.59 "
        },
        {
          "docDate": "09.04.2019",
          "reference": "8800103288",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 482.82 ",
          "credit": " -   ",
          "withdrawalAmount": " 482.82 "
        },
        {
          "docDate": "10.04.2019",
          "reference": "8800104332",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 1,102.45 ",
          "credit": " -   ",
          "withdrawalAmount": " 1,102.45 "
        },
        {
          "docDate": "11.04.2019",
          "reference": "8800105027",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 623.58 ",
          "credit": " -   ",
          "withdrawalAmount": " 623.58 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800107214",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 4.43 ",
          "credit": " -   ",
          "withdrawalAmount": " 4.43 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800111948",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 4.43 ",
          "credit": " -   ",
          "withdrawalAmount": " 4.43 "
        },
        {
          "docDate": "18.04.2019",
          "reference": "8800111989",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " -   ",
          "credit": " 4.43 ",
          "withdrawalAmount": " (4.43)"
        },
        {
          "docDate": "19.04.2019",
          "reference": "8800107766",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 446.90 ",
          "credit": " -   ",
          "withdrawalAmount": " 446.90 "
        },
        {
          "docDate": "22.04.2019",
          "reference": "8800108529",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 10.71 ",
          "credit": " -   ",
          "withdrawalAmount": " 10.71 "
        },
        {
          "docDate": "23.04.2019",
          "reference": "8800109183",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 170.37 ",
          "credit": " -   ",
          "withdrawalAmount": " 170.37 "
        },
        {
          "docDate": "25.04.2019",
          "reference": "8800110849",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 126.42 ",
          "credit": " -   ",
          "withdrawalAmount": " 126.42 "
        },
        {
          "docDate": "26.04.2019",
          "reference": "8800111955",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 210.41 ",
          "credit": " -   ",
          "withdrawalAmount": " 210.41 "
        },
        {
          "docDate": "29.04.2019",
          "reference": "8800112677",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 614.57 ",
          "credit": " -   ",
          "withdrawalAmount": " 614.57 "
        },
        {
          "docDate": "30.04.2019",
          "reference": "8800113954",
          "determination": "300600179",
          "disbursementUnit": "300600014",
          "debit": " 671.79 ",
          "credit": " -   ",
          "withdrawalAmount": " 671.79 "
        },]
    },

  ];

  indexOfDateDetail: number = null;
  dataTable: any;
  dataTableDetail: any;
  indexOfData = 0;
  constructor() { }

  ngOnInit(): void {
    this.datatable();
    this.datatableDetail();
  }
  selectTableMode(event) {
    this.indexOfData = event.target.value;
    this.datatable();

  }

  datatable() {
    if (this.dataTable != null) {
      this.dataTable.destroy();
    }
    this.dataTable = $('#datatableFund').DataTable({

      pagingType: 'full_numbers',
      ordering: false,
      scrollX: false,
      lengthChange: false,
      info: false,
      pageLength: 15,
      searching: false,
      processing: true,
      serverSide: false,
      data: this.data[this.indexOfData].data,

      columns: [
        {
          data: 'determination', className: 'text-center'
        },
        {
          data: 'pp', className: 'text-center'
        },
        {
          data: 'amountWithdrawn', className: 'text-right'
        },

        {
          className: 'text-center',
          render(data, type, row, meta) {

            return '<button-icon class="btn btn-sm btn-primary" ><i class="fa fa-search" aria-hidden="true"></i></button-icon>';
          }
        },
      ],
    });

    this.dataTable.on('click', 'td > button-icon.btn-primary', (event) => {
      let data = this.dataTable.row($(event.currentTarget).closest('tr')).data();
      this.showhead = data.pp;
      let determination = data.determination.replace(" ", "");
      console.log(determination);
      for (let index = 0; index < this.dataDetail.length; index++) {
        if (this.dataDetail[index].determination == determination) {
          this.indexOfDateDetail = index;
          break;
        } else {
          this.indexOfDateDetail = -1;
        }
      }
      this.datatableDetail();

    });


  }
  datatableDetail() {

    if (this.dataTableDetail != null) {
      this.dataTableDetail.destroy();
    }
    let data = null;
    if (this.indexOfDateDetail != null && this.indexOfDateDetail >= 0) {
      data = this.dataDetail[this.indexOfDateDetail].data
    } else if (this.indexOfDateDetail == -1) {

      data = {
        determination: null, total: null, data: null
      }

    }
    this.dataTableDetail = $('#datatableFundDetail').DataTable({

      pagingType: 'full_numbers',
      ordering: false,
      scrollX: false,
      lengthChange: false,
      info: false,
      pageLength: 15,
      searching: false,
      processing: true,
      serverSide: false,
      data: data,

      columns: [
        {
          data: 'docDate', className: 'text-center'
        },
        {
          data: 'reference', className: 'text-center'
        },
        {
          data: 'determination', className: 'text-right'
        },
        {
          data: 'disbursementUnit', className: 'text-right'
        },
        {
          data: 'debit', className: 'text-right'
        },
        {
          data: 'credit', className: 'text-right'
        },
        {
          data: 'withdrawalAmount', className: 'text-right'
        },

      ],
    });





  }
}