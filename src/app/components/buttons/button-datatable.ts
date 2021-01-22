export class ButtonDatatable {


    public static custom(id: string, title: string, color: string = 'info', icon: string = 'fa fa-search', disabled: boolean = false, status: boolean = false): string {
        if(status) {
            if (disabled) {
                return `<button style="border-radius: 8px;"  type="button" data-toggle="tooltip" title="${title}" class="btn btn-${color} btn-sm" id="${id}" disabled>
                <i class="${icon}" aria-hidden="true"></i> 
                </button>`;
            } else {
                return `<button style="border-radius: 8px;" type="button" data-toggle="tooltip" title="${title}" class="btn btn-${color} btn-sm" id="${id}">
                <i class="${icon}" aria-hidden="true" style="color: white;"></i> 
                </button>`;
            }
        }else{
            return ``;
        }
    }

    public static cancel(id: string, title: string, disabled: boolean = false, status: boolean = false): string {
        if(status) {
            if (disabled) {
                return `<button style="border-radius: 8px;" type="button" data-toggle="tooltip" title="${title}" class="btn btn-danger btn-sm" id="${id}" disabled>
                <i class="fa fa-times" aria-hidden="true"></i> 
                </button>`;
            } else {
                return `<button style="border-radius: 8px;" type="button" data-toggle="tooltip" title="${title}" class="btn btn-danger btn-sm" id="${id}">
                <i class="fa fa-times" aria-hidden="true"></i> 
                </button>`;
            }
        }else{
            return ``;
        }
    }

    public static change(id: string, title: string, disabled: boolean = false, status: boolean = false): string {
        if(status){
            if (disabled) {
                return `<button style="border-radius: 8px;" type="button" data-toggle="tooltip" title="${title}" class="btn btn-warning btn-sm" id="${id}" disabled>
                <i class="fa fa-retweet" aria-hidden="true"></i> 
                </button>`;
            } else {
                return `<button style="border-radius: 8px;" type="button" data-toggle="tooltip" title="${title}" class="btn btn-warning btn-sm" id="${id}">
                <i class="fa fa-retweet" aria-hidden="true"></i> 
                </button>`;
            }
        }else{
            return ``;
        }
    }

    public static edit(id: string, title: string = 'แก้ไข', disabled: boolean = false, status: boolean = false): string {
        if(status) {
            if (disabled) {
                return `<button style="border-radius: 8px;color:#fff" type="button" data-toggle="tooltip" title="${title}" class="btn btn-warning btn-sm" id="${id}" disabled>
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> 
                </button>`;
            } else {
                return `<button style="border-radius: 8px;color:#fff" type="button" data-toggle="tooltip" title="${title}" class="btn btn-warning btn-sm" id="${id}">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> 
                </button>`;
            }
        }else{
            return ``;
        }
    }

    public static detail(id: string, title: string = 'ดูรายละเอียด', disabled: boolean = false, status: boolean = false): string {
        if(status) {
            if (disabled) {
                return `<button style="border-radius: 8px;color:#fff" type="button" data-toggle="tooltip" title="${title}" class="btn btn-info btn-sm" id="${id}" disabled>
            <i class="fa fa-search" aria-hidden="true"></i> 
            </button>`;
            } else {
                return `<button style="border-radius: 8px;color:#fff" type="button" data-toggle="tooltip" title="${title}" class="btn btn-info btn-sm" id="${id}">
            <i class="fa fa-search" aria-hidden="true"></i> 
            </button>`;
            }
        }else {
            return ``;
        }
    }

    public static delete(id: string, title: string = 'ลบข้อมูล', disabled: boolean = false, status: boolean = false): string {
        if(status){
            if (disabled) {
                return `<button style="border-radius: 8px;" type="button" data-toggle="tooltip" title="${title}" class="btn btn-danger btn-sm" id="${id}" disabled>
            <i class="fa fa-trash" aria-hidden="true"></i> 
            </button>`;
            } else {
                return `<button style="border-radius: 8px;" type="button" data-toggle="tooltip" title="${title}" class="btn btn-danger btn-sm" id="${id}">
            <i class="fa fa-trash" aria-hidden="true"></i> 
            </button>`;
            }
        }else{
            return ``
        }
    }


    public static history(id: string, title: string = 'ประวัติ'): string {
        return `<button style="border-radius: 8px;" type="button" data-toggle="tooltip" title="${title}" class="btn btn-success btn-sm" id="${id}">
        <i class="fa fa-history" aria-hidden="true"></i> 
        </button>`;
    }

    public static remark(id: string, title: string = 'หมายเหตุ'): string {
        return `<button style="border-radius: 8px;" type="button" data-toggle="tooltip" title="${title}" class="btn btn-info btn-sm" id="${id}">
        <i class="fa fa-search" aria-hidden="true"></i> 
        </button>`;
    }

    public static cndn(id: string): string {
        return `<button style="border-radius: 8px;" class="btn btn-primary btn-sm" style="padding: 2px" data-toggle="tooltip" title="ลด/เพิ่มหนี้" id="${id}">
        <img style="color: #ffffff ; height: 20px; width: 20px; " src="assets/PlusDec_icon.png" /></button>`;
    }

    public static download(id: string, title: string, ): string {
        return `<button style="border-radius: 8px;" class="btn btn-info btn-sm"  data-toggle="tooltip" title="${title}" id="${id}">
        <i class="fa fa-paperclip" aria-hidden="true"></i> </button>`;
    }

    public static iconpfd(id: string): string {
        return `<button style="border-radius: 8px;" class="btn btn-light btn-sm" data-toggle="tooltip" title="ดาวน์โหลดใบชำระเงิน" " id="${id}">
        <i class="fa fa-file-pdf-o" style="color:red" aria-hidden="true"></i>
        </button>`;
    }

    public static downloadFile(id: string, title: string, disabled: boolean = false, ): string {
        if (disabled) {
            return `<button style="border-radius: 8px;" class="btn btn-info btn-sm"  data-toggle="tooltip" title="${title}" id="${id}" disabled>
            <i class="fa fa-download" aria-hidden="true"></i> </button>`;
        } else {
            return `<button style="border-radius: 8px;" class="btn btn-info btn-sm"  data-toggle="tooltip" title="${title}" id="${id}">
            <i class="fa fa-download" aria-hidden="true"></i> </button>`;
        }
    }
} `  `