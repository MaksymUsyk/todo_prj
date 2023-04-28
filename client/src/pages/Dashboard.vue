<template>
  <a-layout class="dashboard">
    <DashboardHeader />
    <a-layout-content class="todos">
      <a-row class="row" :gutter="[16, 16]">
        <a-col v-for="todo in todos" :key="todo.id" span="8">
<!--            <TodoCard :data="todos[0]"/>-->
          <TodoCardAnt :data="todo"/>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>
import TodoCardAnt from "@/components/TodoCardAnt.vue"
import DashboardHeader from "@/components/DashboardHeader.vue"

export default {
  name: "Dashboard",
  components: { DashboardHeader, TodoCardAnt },
  data() {
   return {
     todos: [
       {
         "description": "Sunt delectus harum dignissimos eius dolores expedita id. Tempore eos sunt.",
         "title": "Architecto minima nam nulla.",
         "isDone": false,
         "id": "1"
       },
       {
         "description": "Minus debitis possimus ipsam repudiandae magnam. Corporis at esse blanditiis quam.",
         "title": "Facere fuga quaerat dignissimos dolores.",
         "isDone": true,
         "id": "2"
       },
       {
         "description": "At repellat autem eveniet sapiente nisi maiores. Quae optio unde. Eligendi reprehenderit culpa ipsum debitis. Iste aliquid accusantium harum ratione tenetur ea hic natus. Ex eius ipsum saepe quos ab officia numquam.",
         "title": "Veritatis deleniti iusto et quasi aliquam quia.",
         "isDone": true,
         "id": "3"
       },
       {
         "description": "Iure incidunt expedita animi quia amet eaque esse. Sapiente quo commodi animi eligendi nisi similique nemo. Ipsa dignissimos nam. Animi velit fugiat ipsum provident sint.",
         "title": "Odit laborum nesciunt ex.",
         "isDone": false,
         "id": "4"
       },
       {
         "description": "Numquam laboriosam voluptas occaecati voluptatem culpa error sunt neque possimus. Ut qui nemo nostrum. Labore architecto quasi eaque vel incidunt veniam explicabo rem. Ullam ipsa vel distinctio laudantium id inventore pariatur. Iste veniam quia iusto voluptate consectetur asperiores voluptatem ullam. Perspiciatis ipsam quas magni repudiandae laudantium beatae.",
         "title": "Delectus accusamus doloribus nobis dolores.",
         "isDone": true,
         "id": "5"
       },
       {
         "description": "Sint dolor voluptas porro atque itaque amet. Tenetur deserunt dolore enim. Ratione quidem saepe exercitationem assumenda consequuntur.",
         "title": "Beatae blanditiis placeat atque necessitatibus velit quia.",
         "isDone": true,
         "id": "6"
       },
       {
         "description": "Voluptates enim minima exercitationem facilis perferendis eum incidunt unde assumenda. Nihil tenetur molestias hic tempora expedita amet ea laboriosam.",
         "title": "Culpa laborum aspernatur facilis.",
         "isDone": false,
         "id": "7"
       },
       {
         "description": "Illo repellat inventore tempora similique nesciunt quia. Quaerat aspernatur quasi culpa unde facere eligendi. Optio hic nostrum necessitatibus est dolore itaque repudiandae velit. Corporis placeat harum nisi consequuntur. Iste vitae eius voluptates in architecto.",
         "title": "Laboriosam repudiandae enim in id ipsam.",
         "isDone": false,
         "id": "8"
       },
       {
         "description": "Reprehenderit perferendis sed. Neque illo alias quisquam doloribus doloribus odit. Laborum iusto corrupti labore pariatur tenetur. Dolor eius molestias architecto itaque. Numquam nihil similique quis.",
         "title": "Rem at aspernatur nemo ipsum distinctio ut doloribus velit odio.",
         "isDone": true,
         "id": "9"
       },
       {
         "description": "Dicta nam fuga facere unde quibusdam voluptas deserunt architecto. Optio libero iusto illum ipsam velit. Accusantium error earum perferendis corrupti quas illum quo nisi. Deleniti deserunt quo.",
         "title": "Rem suscipit molestiae nulla harum a nesciunt.",
         "isDone": true,
         "id": "10"
       },
       {
         "description": "Unde recusandae iste architecto ex voluptatum assumenda. Earum quaerat soluta quibusdam corrupti velit repellendus unde fuga.",
         "title": "Temporibus aperiam nesciunt excepturi exercitationem repellat harum omnis.",
         "isDone": false,
         "id": "11"
       },
       {
         "description": "Nostrum voluptatum autem explicabo veritatis quibusdam expedita excepturi. Inventore officia animi. Sed praesentium commodi dolorem deserunt. Molestias voluptas voluptate ipsum nemo. Fugiat at dolorem officia. Fugit voluptate facere fuga consequuntur pariatur aliquid ad.",
         "title": "Magni recusandae eaque consectetur nihil velit expedita magni reiciendis.",
         "isDone": true,
         "id": "12"
       },
       {
         "description": "Molestias praesentium porro laborum amet quaerat. Dolorum sapiente quae quis recusandae.",
         "title": "Consequatur a ipsam voluptatum laborum explicabo fugit occaecati est.",
         "isDone": true,
         "id": "13"
       }
     ]
   }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  .todos {
    padding: 20px;
  }
}
</style>