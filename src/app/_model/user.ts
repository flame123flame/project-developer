export class User {
    username: string;
    authorities: string;
    position: string;
    token: string;
    jwttoken: string;
    firstNameTh: string;
    lastNameTh: string;
    role: Role;
}

export interface Role {
fwRoleId: number;
roleCode: string;
roleName: string;
roleDescription: string;
createBy: string;
createDate: string;
updateBy?: any;
updateDate: string;
listGroup: ListGroup[];
}

export interface ListGroup {
userPageGroupId?: any;
roleCode: string;
pageGroupCode: string;
createBy: string;
createDate: string;
updateBy?: any;
updateDate: string;
readMark?: any;
writeMark?: any;
editMark?: any;
approveMark?: any;
listDetail: ListDetail[];
}
export interface ListDetail {
userPageDtlId?: any;
roleCode: string;
pageGroupCode: string;
pageDtlCode: string;
createBy: string;
createDate: string;
updateBy?: any;
updateDate: string;
readMark: boolean;
writeMark: boolean;
editMark: boolean;
approveMark: boolean;
}




