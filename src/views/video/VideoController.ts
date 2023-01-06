import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

interface IVideoMenu {
  label: string
  name: string
}

export function useVideoMenu() {
  const menus: IVideoMenu[] = [
    {
      label: '视频',
      name: 'videoList'
    },
    {
      label: 'MV',
      name: 'videoMv'
    }
  ]

  const router = useRouter()
  const route = useRoute()

  const currentMenu = ref(route.name)

  watch(
    () => route.name,
    (m) => {
      currentMenu.value = m
    }
  )

  const handleTabClick = ({ props }: { props: IVideoMenu }) => {
    router.push({ name: props.name, replace: true })
  }

  return {
    menus,
    currentMenu,
    handleTabClick
  }
}
