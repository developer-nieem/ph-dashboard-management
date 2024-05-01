"use client"
import { useQuery } from "@tanstack/react-query"
import { getData } from "./projects.data"


export const useGetProjects = () => {

    const projectsData =  useQuery({
        queryKey : ["projects"],
        queryFn : getData,
       })

       return projectsData

}