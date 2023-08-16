export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      countries: {
        Row: {
          flag_url: string | null
          id: string
          keywords: string | null
          name: string | null
          old_id: string | null
        }
        Insert: {
          flag_url?: string | null
          id?: string
          keywords?: string | null
          name?: string | null
          old_id?: string | null
        }
        Update: {
          flag_url?: string | null
          id?: string
          keywords?: string | null
          name?: string | null
          old_id?: string | null
        }
        Relationships: []
      }
      favorite_items: {
        Row: {
          id: string
          item_id: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          item_id?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          item_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorite_items_item_id_fkey"
            columns: ["item_id"]
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorite_items_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      items: {
        Row: {
          id: string
          keywords: string | null
          logo_url: string | null
          min_price: number | null
          name: string | null
          priority: number | null
          slug: string | null
        }
        Insert: {
          id?: string
          keywords?: string | null
          logo_url?: string | null
          min_price?: number | null
          name?: string | null
          priority?: number | null
          slug?: string | null
        }
        Update: {
          id?: string
          keywords?: string | null
          logo_url?: string | null
          min_price?: number | null
          name?: string | null
          priority?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      pairs: {
        Row: {
          country_id: string | null
          id: number
          item_id: string | null
          price: number | null
          priority: number | null
          quantity: number | null
        }
        Insert: {
          country_id?: string | null
          id?: number
          item_id?: string | null
          price?: number | null
          priority?: number | null
          quantity?: number | null
        }
        Update: {
          country_id?: string | null
          id?: number
          item_id?: string | null
          price?: number | null
          priority?: number | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pairs_country_id_fkey"
            columns: ["country_id"]
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pairs_item_id_fkey"
            columns: ["item_id"]
            referencedRelation: "items"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
