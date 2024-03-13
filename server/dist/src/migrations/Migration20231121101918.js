"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20231121101918 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20231121101918 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table `trace` drop foreign key `trace_user_id_foreign`;');
        this.addSql('alter table `part` drop foreign key `part_trace_id_foreign`;');
        this.addSql('alter table `log` drop foreign key `log_trace_id_foreign`;');
        this.addSql('alter table `asset` drop foreign key `asset_trace_id_foreign`;');
        this.addSql('alter table `user` modify `name` text, modify `role` enum(\'admin\', \'user\') not null default \'user\';');
        this.addSql('alter table `trace` add constraint `trace_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade;');
        this.addSql('alter table `part` add constraint `part_trace_id_foreign` foreign key (`trace_id`) references `trace` (`id`) on update cascade;');
        this.addSql('alter table `log` add constraint `log_trace_id_foreign` foreign key (`trace_id`) references `trace` (`id`) on update cascade;');
        this.addSql('alter table `asset` modify `url` text;');
        this.addSql('alter table `asset` add constraint `asset_trace_id_foreign` foreign key (`trace_id`) references `trace` (`id`) on update cascade;');
    }
    async down() {
        this.addSql('alter table `asset` drop foreign key `asset_trace_id_foreign`;');
        this.addSql('alter table `log` drop foreign key `log_trace_id_foreign`;');
        this.addSql('alter table `trace` drop foreign key `trace_user_id_foreign`;');
        this.addSql('alter table `part` drop foreign key `part_trace_id_foreign`;');
        this.addSql('alter table `asset` modify `url` text default \'NULL\';');
        this.addSql('alter table `asset` add constraint `asset_trace_id_foreign` foreign key (`trace_id`) references `trace` (`id`) on update restrict on delete cascade;');
        this.addSql('alter table `log` add constraint `log_trace_id_foreign` foreign key (`trace_id`) references `trace` (`id`) on update restrict on delete cascade;');
        this.addSql('alter table `trace` add constraint `trace_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update restrict on delete cascade;');
        this.addSql('alter table `part` add constraint `part_trace_id_foreign` foreign key (`trace_id`) references `trace` (`id`) on update restrict on delete cascade;');
        this.addSql('alter table `user` modify `name` text default \'NULL\', modify `role` enum(\'admin\', \'user\') not null default \'\'\'user\'\'\';');
    }
}
exports.Migration20231121101918 = Migration20231121101918;
//# sourceMappingURL=Migration20231121101918.js.map